// Copyright (c) 2023-2024 FlyByWire Simulations
// SPDX-License-Identifier: GPL-3.0

import {
    FailureDefinition,
    NavigraphClient,
    SENTRY_CONSENT_KEY,
    SentryConsentState,
    useInteractionEvent,
    useInterval,
    usePersistentNumberProperty, usePersistentProperty,
    useSimVar,
} from '@flybywiresim/fbw-sdk';
import { distanceTo } from 'msfs-geo';
import React, { useEffect, useState } from 'react';
import { Battery } from 'react-bootstrap-icons';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ATC } from './ATC/ATC';
import { NavigraphContext } from './Apis/Navigraph/Navigraph';
import { Error as ErrorIcon } from './Assets/Error';
import { Checklists, setAutomaticItemStates } from './Checklists/Checklists';
import { CHECKLISTS } from './Checklists/Lists';
import { Dashboard } from './Dashboard/Dashboard';
import { Dispatch } from './Dispatch/Dispatch';
import { Failures } from './Failures/Failures';
import { Ground } from './Ground/Ground';
import { Navigation } from './Navigation/Navigation';
import { Performance } from './Performance/Performance';
import { Presets } from './Presets/Presets';
import { FlyPadPage } from './Settings/Pages/FlyPadPage';
import { Settings } from './Settings/Settings';
import { StatusBar } from './StatusBar/StatusBar';
import { setChecklistItems } from './Store/features/checklists';
import { setFlightPlanProgress } from './Store/features/flightProgress';
import { fetchSimbriefDataAction, isSimbriefDataLoaded } from './Store/features/simBrief';
import { clearEfbState, store, useAppDispatch, useAppSelector } from './Store/store';
import { ToolBar } from './ToolBar/ToolBar';
import { HSLogo } from './UtilComponents/HSLogo';
import { AlertModal, ModalContainer, ModalProvider, useModals } from './UtilComponents/Modals/Modals';
import { Tooltip } from './UtilComponents/TooltipWrapper';
import { FailuresOrchestratorProvider } from './failures-orchestrator-provider';

import './Assets/Efb.scss';
import './Assets/Slider.scss';
import './Assets/Theme.css';

import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

const BATTERY_DURATION_CHARGE_MIN = 180;
const BATTERY_DURATION_DISCHARGE_MIN = 540;

const LoadingScreen = () => (
    <div className="flex h-screen w-screen items-center justify-center bg-theme-statusbar">
        <HSLogo width={128} height={120} className="text-theme-text" />
    </div>
);

const EmptyBatteryScreen = () => (
    <div className="flex h-screen w-screen items-center justify-center bg-theme-statusbar">
        <Battery size={128} className="text-utility-red" />
    </div>
);

export enum PowerStates {
    SHUTOFF,
    SHUTDOWN,
    STANDBY,
    LOADING,
    LOADED,
    EMPTY,
}

interface PowerContextInterface {
    powerState: PowerStates,
    setPowerState: (PowerState) => void
}

export const PowerContext = React.createContext<PowerContextInterface>(undefined as any);

interface BatteryStatus {
    level: number;
    lastChangeTimestamp: number;
    isCharging: boolean;
}

export const usePower = () => React.useContext(PowerContext);

// this returns either `A380_842` or `A320_251N` depending on the aircraft
export const getAirframeType = () => new URL(
    document.querySelectorAll('vcockpit-panel > *')[0].getAttribute('url'),
).searchParams.get('Airframe');

export const Efb = () => {
    const [powerState, setPowerState] = useState<PowerStates>(PowerStates.SHUTOFF);
    const [absoluteTime] = useSimVar('E:ABSOLUTE TIME', 'seconds', 5000);
    const [, setBrightness] = useSimVar('L:A32NX_EFB_BRIGHTNESS', 'number');
    const [brightnessSetting] = usePersistentNumberProperty('EFB_BRIGHTNESS', 0);
    const [usingAutobrightness] = useSimVar('L:A32NX_EFB_USING_AUTOBRIGHTNESS', 'bool', 300);
    const [batteryLifeEnabled] = usePersistentNumberProperty('EFB_BATTERY_LIFE_ENABLED', 1);

    const [navigraph] = useState(() => new NavigraphClient());

    const dispatch = useAppDispatch();
    const simbriefData = useAppSelector((state) => state.simbrief.data);
    const [navigraphUsername] = usePersistentProperty('NAVIGRAPH_USERNAME');
    const [overrideSimBriefUserID] = usePersistentProperty('CONFIG_OVERRIDE_SIMBRIEF_USERID');
    const [autoSimbriefImport] = usePersistentProperty('CONFIG_AUTO_SIMBRIEF_IMPORT');

    const [dc2BusIsPowered] = useSimVar('L:A32NX_ELEC_DC_2_BUS_IS_POWERED', 'bool');
    const [batteryLevel, setBatteryLevel] = useState<BatteryStatus>({
        level: 100,
        lastChangeTimestamp: absoluteTime,
        isCharging: dc2BusIsPowered,
    });

    const [ac1BusIsPowered] = useSimVar('L:A32NX_ELEC_AC_1_BUS_IS_POWERED', 'number', 1000);
    const [, setLoadLightingPresetVar] = useSimVar('L:A32NX_LIGHTING_PRESET_LOAD', 'number', 200);
    const [autoDisplayBrightness] = useSimVar('GLASSCOCKPIT AUTOMATIC BRIGHTNESS', 'percent', 1000);
    const [timeOfDay] = useSimVar('E:TIME OF DAY', 'number', 5000);
    const [autoLoadLightingPresetEnabled] = usePersistentNumberProperty('LIGHT_PRESET_AUTOLOAD', 0);
    const [autoLoadDayLightingPresetID] = usePersistentNumberProperty('LIGHT_PRESET_AUTOLOAD_DAY', 0);
    const [autoLoadDawnDuskLightingPresetID] = usePersistentNumberProperty('LIGHT_PRESET_AUTOLOAD_DAWNDUSK', 0);
    const [autoLoadNightLightingPresetID] = usePersistentNumberProperty('LIGHT_PRESET_AUTOLOAD_NIGHT', 0);

    const [lat] = useSimVar('PLANE LATITUDE', 'degree latitude', 4000);
    const [long] = useSimVar('PLANE LONGITUDE', 'degree longitude', 4000);

    const { arrivingPosLat, arrivingPosLong, departingPosLat, departingPosLong } = useAppSelector((state) => state.simbrief.data);

    const [theme] = usePersistentProperty('EFB_UI_THEME', 'blue');

    const { showModal } = useModals();

    const history = useHistory();

    useEffect(() => {
        document.documentElement.classList.add(`theme-${theme}`, 'animationsEnabled');
    }, []);

    useEffect(() => {
        const remainingDistance = distanceTo(
            { lat, long },
            { lat: arrivingPosLat, long: arrivingPosLong },
        );

        const totalDistance = distanceTo(
            { lat: departingPosLat, long: departingPosLong },
            { lat: arrivingPosLat, long: arrivingPosLong },
        );
        const flightPlanProgress = totalDistance ? Math.max(((totalDistance - remainingDistance) / totalDistance) * 100, 0) : 0;

        dispatch(setFlightPlanProgress(flightPlanProgress));
    }, [lat.toFixed(2), long.toFixed(2), arrivingPosLat, arrivingPosLong, departingPosLat, departingPosLong]);

    useEffect(() => {
        if (powerState !== PowerStates.LOADED || !batteryLifeEnabled) return;

        setBatteryLevel((oldLevel) => {
            const deltaTs = Math.max(absoluteTime - oldLevel.lastChangeTimestamp, 0);
            const batteryDurationSec = oldLevel.isCharging ? BATTERY_DURATION_CHARGE_MIN * 60 : -BATTERY_DURATION_DISCHARGE_MIN * 60;

            let level = oldLevel.level + 100 * deltaTs / batteryDurationSec;
            if (level > 100) level = 100;
            if (level < 0) level = 0;
            const lastChangeTimestamp = absoluteTime;
            const isCharging = oldLevel.isCharging;

            if (oldLevel.level > 20 && level <= 20) {
                showModal(
                    <AlertModal
                        title="Battery Low"
                        bodyText="The battery is getting very low. Please charge the battery soon."
                    />,
                );
            }

            return { level, lastChangeTimestamp, isCharging };
        });
    }, [absoluteTime, powerState]);

    useEffect(() => {
        setBatteryLevel((oldLevel) => {
            if (oldLevel.isCharging !== dc2BusIsPowered) {
                return { level: oldLevel.level, lastChangeTimestamp: absoluteTime, isCharging: dc2BusIsPowered };
            }
            return oldLevel;
        });
    }, [absoluteTime, dc2BusIsPowered]);

    useEffect(() => {
        if (batteryLevel.level <= 0) {
            setPowerState(PowerStates.EMPTY);
        }

        if (batteryLevel.level > 2 && powerState === PowerStates.EMPTY) {
            offToLoaded();
        }
    }, [batteryLevel, powerState]);

    const [autoFillChecklists] = usePersistentNumberProperty('EFB_AUTOFILL_CHECKLISTS', 0);
    const { checklists } = useAppSelector((state) => state.trackingChecklists);

    useEffect(() => {
        if (powerState === PowerStates.SHUTOFF) {
            dispatch(clearEfbState());
        } else if (powerState === PowerStates.LOADED) {
            const checklistItemsEmpty = checklists.every((checklist) => !checklist.items.length);

            if (checklistItemsEmpty) {
                CHECKLISTS.forEach((checklist, index) => {
                    dispatch(setChecklistItems({
                        checklistIndex: index,
                        itemArr: checklist.items.map((item) => ({ completed: false, hasCondition: item.condition !== undefined })),
                    }));
                });
            }

            if ((!simbriefData || !isSimbriefDataLoaded()) && autoSimbriefImport === 'ENABLED') {
                fetchSimbriefDataAction(navigraphUsername ?? '', overrideSimBriefUserID ?? '').then((action) => {
                    dispatch(action);
                }).catch((e) => {
                    toast.error(e.message);
                });
            }
        }
    }, [powerState]);

    // Automatically load a lighting preset
    useEffect(() => {
        if (ac1BusIsPowered && powerState === PowerStates.LOADED && autoLoadLightingPresetEnabled) {
            // TIME OF DAY enum : 1 = Day ; 2 = Dusk/Dawn ; 3 = Night
            switch (timeOfDay) {
            case 1:
                if (autoLoadDayLightingPresetID !== 0) {
                    console.log('Auto-loading lighting preset: ', autoLoadDayLightingPresetID);
                    setLoadLightingPresetVar(autoLoadDayLightingPresetID);
                }
                break;
            case 2:
                if (autoLoadDawnDuskLightingPresetID !== 0) {
                    console.log('Auto-loading lighting preset: ', autoLoadDawnDuskLightingPresetID);
                    setLoadLightingPresetVar(autoLoadDawnDuskLightingPresetID);
                }
                break;
            case 3:
                if (autoLoadNightLightingPresetID !== 0) {
                    console.log('Auto-loading lighting preset: ', autoLoadNightLightingPresetID);
                    setLoadLightingPresetVar(autoLoadNightLightingPresetID);
                }
                break;
            default:
                break;
            }
        }
    }, [ac1BusIsPowered, powerState, autoLoadLightingPresetEnabled]);

    useInterval(() => {
        if (!autoFillChecklists) return;

        setAutomaticItemStates();
    }, 1000);

    const offToLoaded = () => {
        const shouldWait = powerState === PowerStates.SHUTOFF || powerState === PowerStates.EMPTY;
        setPowerState(PowerStates.LOADING);
        if (shouldWait) {
            setTimeout(() => {
                setPowerState(PowerStates.LOADED);
            }, 2500);
        } else {
            setPowerState(PowerStates.LOADED);
        }
        return (<></>);
    };

    useInteractionEvent('A32NX_EFB_POWER', () => {
        if (powerState === PowerStates.STANDBY) {
            offToLoaded();
        } else {
            history.push('/');
            setPowerState(PowerStates.STANDBY);
        }
    });

    const { posX, posY, shown, text } = useAppSelector((state) => state.tooltip);

    useEffect(() => {
        if (powerState !== PowerStates.LOADED && powerState !== PowerStates.SHUTDOWN) {
            // die, retinas!
            setBrightness(100);
        } else if (usingAutobrightness) {
            setBrightness(autoDisplayBrightness);
        } else {
            setBrightness(brightnessSetting);
        }
    }, [powerState, brightnessSetting, autoDisplayBrightness, usingAutobrightness]);

    // =========================================================================
    // <Pushback>
    const [nwStrgDisc] = useSimVar('L:A32NX_HYD_NW_STRG_DISC_ECAM_MEMO', 'Bool', 100);

    // Required to fully release the tug and restore steering capabilities
    // Must not be fired too early after disconnect therefore we wait until
    // ECAM "NW STRG DISC" message also disappears.
    useEffect(() => {
        if (!nwStrgDisc) {
            SimVar.SetSimVarValue('K:TUG_DISABLE', 'Bool', 1);
        }
    }, [nwStrgDisc]);

    // </Pushback>
    // =========================================================================

    const { offsetY } = useAppSelector((state) => state.keyboard);

    switch (powerState) {
    case PowerStates.SHUTOFF:
    case PowerStates.STANDBY:
        return <div className="h-screen w-screen" onClick={offToLoaded} />;
    case PowerStates.LOADING:
    case PowerStates.SHUTDOWN:
        return <LoadingScreen />;
    case PowerStates.EMPTY:
        if (dc2BusIsPowered === 1) {
            return offToLoaded();
        }
        return <EmptyBatteryScreen />;
    case PowerStates.LOADED:
        return (
            <NavigraphContext.Provider value={navigraph}>
                <ModalContainer />
                <PowerContext.Provider value={{ powerState, setPowerState }}>
                    <div className="bg-theme-body" style={{ transform: `translateY(-${offsetY}px)` }}>
                        <Tooltip posX={posX} posY={posY} shown={shown} text={text} />

                        <ToastContainer
                            position="top-center"
                            draggableDirection="y"
                            limit={2}
                        />
                        <StatusBar
                            batteryLevel={batteryLevel.level}
                            isCharging={dc2BusIsPowered === 1}
                        />
                        <div className="flex flex-row">
                            <ToolBar />
                            <div className="h-screen w-screen pr-6 pt-14">
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/dashboard" />
                                    </Route>
                                    <Route path="/dashboard" component={Dashboard} />
                                    <Route path="/dispatch" component={Dispatch} />
                                    <Route path="/ground" component={Ground} />
                                    <Route path="/performance" component={Performance} />
                                    <Route path="/navigation" component={Navigation} />
                                    <Route path="/atc" component={ATC} />
                                    <Route path="/failures" component={Failures} />
                                    <Route path="/checklists" component={Checklists} />
                                    <Route path="/presets" component={Presets} />
                                    <Route path="/settings" component={Settings} />
                                    <Route path="/settings/flypad" component={FlyPadPage} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </PowerContext.Provider>
            </NavigraphContext.Provider>
        );
    default:
        throw new Error('Invalid content state provided');
    }
};

interface ErrorFallbackProps {
    resetErrorBoundary: (...args: Array<unknown>) => void;
}

export const ErrorFallback = ({ resetErrorBoundary }: ErrorFallbackProps) => {
    const [sessionId] = usePersistentProperty('A32NX_SENTRY_SESSION_ID');
    const [sentryEnabled] = usePersistentProperty(SENTRY_CONSENT_KEY, SentryConsentState.Refused);

    return (
        <div className="flex h-screen w-full items-center justify-center bg-theme-body">
            <div className="max-w-4xl">
                <ErrorIcon />
                <div className="mt-6 space-y-12">
                    <h1 className="text-4xl font-bold">A critical error has been encountered.</h1>

                    <h2 className="text-3xl">You are able to reset this tablet to recover from this error.</h2>

                    {sentryEnabled === SentryConsentState.Given && (
                        <>
                            <h2 className="text-3xl leading-relaxed">
                                You have opted into anonymous error reporting and this issue has been relayed to us. If you want immediate support,
                                please share the following code to a member of staff in the #support channel on the FlyByWire Discord server:
                            </h2>

                            <h1 className="text-center text-4xl font-extrabold tracking-wider">{sessionId}</h1>
                        </>
                    )}

                    <div
                        className="w-full rounded-md border-2 border-utility-red bg-utility-red px-8 py-4 text-theme-body transition duration-100 hover:bg-theme-body hover:text-utility-red"
                        onClick={resetErrorBoundary}
                    >
                        <h2 className="text-center font-bold text-current">Reset Display</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export interface EfbInstrumentProps {
    failures: FailureDefinition[],
}

export const EfbInstrument: React.FC<EfbInstrumentProps> = ({ failures }) => {
    const [, setSessionId] = usePersistentProperty('A32NX_SENTRY_SESSION_ID');

    useEffect(
        () => () => setSessionId(''), [],
    );

    const [err, setErr] = useState(false);

    return (
        <FailuresOrchestratorProvider failures={failures}>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setErr(false)} resetKeys={[err]}>
                <Router>
                    <ModalProvider>
                        <Provider store={store}>
                            <Efb />
                        </Provider>
                    </ModalProvider>
                </Router>
            </ErrorBoundary>
        </FailuresOrchestratorProvider>
    );
};
