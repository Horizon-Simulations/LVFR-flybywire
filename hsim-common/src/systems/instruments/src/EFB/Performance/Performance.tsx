// Copyright (c) 2023-2024 FlyByWire Simulations
// SPDX-License-Identifier: GPL-3.0

import React from 'react';

import { t } from '../Localization/translation';
import { TODCalculator } from '../TODCalculator/TODCalculator';
import { Navbar } from '../UtilComponents/Navbar';
import { PageLink, PageRedirect, TabRoutes } from '../Utils/routing';
import { LandingWidget } from './Widgets/LandingWidget';

export const Performance = () => {
    const tabs: PageLink[] = [
        { name: 'Top of Descent', alias: t('Performance.TopOfDescent.Title'), component: <TODCalculator /> },
        { name: 'Landing', alias: t('Performance.Landing.Title'), component: <LandingWidget /> },
    ];

    return (
        <div className="w-full">
            <div className="relative">
                <h1 className="font-bold">{t('Performance.Title')}</h1>
                <Navbar
                    className="absolute right-0 top-0"
                    tabs={tabs}
                    basePath="/performance"
                />
            </div>
            <div className="mt-4">
                <PageRedirect basePath="/performance" tabs={tabs} />
                <TabRoutes basePath="/performance" tabs={tabs} />
            </div>
        </div>
    );
};
