// Copyright (c) 2023-2024 FlyByWire Simulations
// SPDX-License-Identifier: GPL-3.0

/* eslint-disable no-console */
import React from 'react';
import { AirframeType } from '@flybywiresim/fbw-sdk';
import { useAppSelector } from '@flybywiresim/flypad';
import { A318Services } from './A318_100/A318Services';
import { A319Services } from './A319_100/A319Services';
import { A320Services } from './A320_200/A320Services';
import { A321Services } from './A321_200/A321Services';


export const ServicesPage = () => {
  // TODO: Configurable Services Page vs A380/A320
  const airframeInfo = useAppSelector((state) => state.config.airframeInfo);
    switch (airframeInfo.variant) {
    case AirframeType.A318_115:
        return (
            <A318Services />
        );
    case AirframeType.A318_115_ACJ:
        return (
            <A318Services />
        );
    case AirframeType.A318_115_BAW:
        return (
            <A318Services />
        );
    case AirframeType.A319_115:
        return (
            <A319Services />
        );
    case AirframeType.A319_115_ACJ:
        return (
            <A319Services />
        );
    case AirframeType.A319_133:
        return (
            <A319Services />
        );
     case AirframeType.A319_133_ACJ:
         return (
            <A319Services />
         );
    case AirframeType.A320_214:
        return (
            <A320Services />
        );
    case AirframeType.A320_214_SL:
        return (
            <A320Services />
        );
    case AirframeType.A320_232:
        return (
            <A320Services />
        );
    case AirframeType.A320_232_SL:
         return (
            <A320Services />
         );
    case AirframeType.A321_251N:
        return (
            <A321Services />
        );
    case AirframeType.A321_251N_LR:
        return (
            <A321Services />
        );
    case AirframeType.A321_271N:
        return (
            <A321Services />
        );
     case AirframeType.A321_271N_LR:
         return (
            <A321Services />
         );
    default:
        return (
            <A320Services />
        );
    }
};
