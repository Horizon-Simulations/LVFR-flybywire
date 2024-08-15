// Copyright (c) 2021-2023 FlyByWire Simulations
//
// SPDX-License-Identifier: GPL-3.0

'use strict';

const esbuild = require('esbuild');
const path = require('path');
const { createModuleBuild } = require('#build-utils');

const outFile = 'build-a321neo/out/lvfr-horizonsim-airbus-a321-neo/html_ui/JS/A21NHS/atsu/fmsclient.js';

esbuild.build(createModuleBuild ('build-a321neo', 'AtsuFmsClient', path.join(__dirname, '/src/index.ts'), outFile, __dirname));
