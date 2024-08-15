// Copyright (c) 2021-2023 FlyByWire Simulations
//
// SPDX-License-Identifier: GPL-3.0

import fs from 'fs';
import { join } from 'path';
import { ExecTask } from '@flybywiresim/igniter';
import { Directories } from '../directories.mjs';

export function getInstrumentsIgniterTasks() {
    const baseInstruments = fs
        .readdirSync(join(Directories.instruments, 'src'), { withFileTypes: true })
        .filter((d) => d.isDirectory() && fs.existsSync(join(Directories.instruments, 'src', d.name, 'config.json')));

    return baseInstruments.map(({ name }) => {
        const config = JSON.parse(fs.readFileSync(join(Directories.instruments, 'src', name, 'config.json')));
        return new ExecTask(name, `cd build-a321neo && mach build -f ${name}`, [
            join('build-a321neo/src/systems/instruments/src', name),
            'build-a321neo/src/systems/instruments/src/Common',
            join('build-a321neo/out/lvfr-horizonsim-airbus-a321-neo/html_ui/Pages/VCockpit/Instruments/A21NHS', name),
            ...(config.extraDeps || []),
        ]);
    });
}
