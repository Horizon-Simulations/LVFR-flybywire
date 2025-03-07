import { Clock, EventBus, FSComponent, InstrumentBackplane } from '@microsoft/msfs-sdk';
import { FuelSystemPublisher } from 'instruments/src/MsfsAvionicsCommon/providers/FuelSystemPublisher';
import { ArincValueProvider } from './shared/ArincValueProvider';
import { EwdComponent } from './EWD';
import { EwdSimvarPublisher } from './shared/EwdSimvarPublisher';
import { PseudoFWC } from './PseudoFWC';

import './style.scss';

class A32NX_EWD extends BaseInstrument {
    private readonly bus = new EventBus();

    private readonly backplane = new InstrumentBackplane();

    private readonly simVarPublisher = new EwdSimvarPublisher(this.bus);

    private readonly arincProvider = new ArincValueProvider(this.bus);

    private readonly clock = new Clock(this.bus);

    private readonly fuelSystemPublisher = new FuelSystemPublisher(this.bus);

    private readonly pseudoFwc = new PseudoFWC(this.bus, this);

    constructor() {
        super();

        this.backplane.addInstrument('Clock', this.clock);
        this.backplane.addPublisher('SimVars', this.simVarPublisher);
        this.backplane.addPublisher('FuelSystem', this.fuelSystemPublisher);
        this.backplane.addInstrument('Fwc', this.pseudoFwc);
    }

    get templateID(): string {
        return 'A320HS_EWDiae';
    }

    public connectedCallback(): void {
        super.connectedCallback();

        this.arincProvider.init();
        this.backplane.init();

        FSComponent.render(<EwdComponent bus={this.bus} instrument={this} />, document.getElementById('EWDiae_CONTENT'));

        // Remove "instrument didn't load" text
        document.getElementById('EWDiae_CONTENT').querySelector(':scope > h1').remove();
    }

    public Update(): void {
        super.Update();

        this.backplane.onUpdate();
    }
}

registerInstrument('a32nx-ewd', A32NX_EWD);
