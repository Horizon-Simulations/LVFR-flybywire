// Copyright (c) 2023-2024 FlyByWire Simulations
// SPDX-License-Identifier: GPL-3.0

/* eslint-disable max-len */
import * as React from 'react';
// viewBox="0 0 777 814"
export const A318GroundServiceOutline = ({ className, cabinLeftStatus, cabinRightStatus, aftLeftStatus, aftRightStatus }: {className: string, cabinLeftStatus: boolean, cabinRightStatus: boolean, aftLeftStatus: boolean, aftRightStatus: boolean}) => (
    <svg
        id="SVG"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="777"
        height="814"
        viewBox="0 0 777 814"
    >
        <defs>
            <style>
                {
                    '.cls-1,.cls-2,.cls-4,.cls-5,.cls-7{fill:none;stroke-miterlimit:10}.cls-1,.cls-4{stroke:currentColor}.cls-2,.cls-4{stroke-width:2px}.cls-2{stroke:currentColor}.cls-5,.cls-7{stroke:currentColor;stroke-width:.5px}.cls-7{stroke:currentColor}'
                }
            </style>
        </defs>
        <g id="SVG_Detail_Lines">
          <g id="Engines" transform="matrix(1, 0, 0, 1, 0, 15.399994)">
            <g id="ENG_1">
              <g id="Strakes">
                <path
                  id="Outer_Strake"
                  className="cls-5"
                  d="m245.67 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"
                />
                <path
                  id="Inner_Strake"
                  className="cls-5"
                  d="m276.83 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"
                />
              </g>
              <g id="Reverser_Door">
                <path
                  id="Outer_Side"
                  className="cls-5"
                  d="M256.92 295.91c-7.92 0-14.42-.09-19.83-.7"
                />
                <path
                  id="Inner_Side"
                  className="cls-5"
                  d="M265.58 295.91c7.92 0 14.42-.09 19.83-.7"
                />
              </g>
              <g id="Engine_Mount">
                <g id="Connections">
                  <path
                    id="Fan_Connection"
                    className="cls-7"
                    d="m238.37 261.87.37-2.34c14.97-1.51 30.05-1.51 45.02 0l.37 2.34"
                  />
                  <path
                    id="Middle_Connection"
                    className="cls-7"
                    d="M261.25 252.6v5.8"
                  />
                </g>
                <g id="Mounts">
                  <path id="Left_Mount" className="cls-5" d="M255.06 295.9v-37.5"/>
                  <path id="Right_Mount" className="cls-5" d="M267.39 295.9v-37.42"/>
                  <path id="Front_Mount" className="cls-5" d="M255.06 260.72h12.33"/>
                </g>
              </g>
                <path
                  id="Wing_Mount"
                  className="cls-5"
                  d="m272.64 321.82-7.6 3.97-9.98 9.57"
                />
            </g>
            <g id="ENG_2">
              <g id="Strakes-2">
                <path id="Outer_Strake-2" className="cls-5" d="m530.97 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"/>
                <path id="Inner_Strake-2" className="cls-5" d="m499.81 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"/>
              </g>
              <g id="Reverser_Door-2">
                <path id="Outer_Side-2" className="cls-5" d="M519.72 295.91c7.92 0 14.42-.09 19.83-.7"/>
                <path id="Inner_Side-2" className="cls-5" d="M511.05 295.91c-7.92 0-14.42-.09-19.83-.7"/>
              </g>
              <g id="Engine_Mount-2">
                <g id="Connections-2">
                  <path id="Fan_Connection-2" className="cls-7" d="m538.27 261.87-.37-2.34a224.275 224.275 0 0 0-45.02 0l-.37 2.34"/>
                  <path id="Middle_Connection-2" className="cls-7" d="M515.39 252.6v5.8"/>
                </g>
                <g id="Mounts-2">
                  <path id="Right_Mount-2" className="cls-5" d="M521.58 295.9v-37.5"/>
                  <path id="Left_Mount-2" className="cls-5" d="M509.25 295.9v-37.42"/>
                  <path id="Front_Mount-2" className="cls-5" d="M521.58 260.72h-12.33"/>
                </g>
              </g>
              <path id="Wing_Mount-2" className="cls-5" d="m503.99 321.82 7.61 3.97 9.15 8.61"/>
            </g>
          </g>
          <g id="Emergency_Lines" transform="matrix(1, 0, 0, 1, 0, 21)">
            <path id="Left_Emergency_Marks" className="cls-5" d="M346.2 307h-20.55a6.31 6.31 0 0 0-6.31 6.31v84.6"/>
            <path id="Right_Emergency_Marks" className="cls-5" d="M430.18 307h20.55a6.31 6.31 0 0 1 6.31 6.31v84.6"/>
          </g>
          <g id="Wing_Layers" transform="matrix(1, 0, 0, 1, 0, 15.670013)">
            <path id="Left_Wing_Markings" className="cls-5" d="M346.2 292.33 35.36 449.78v11.89l219.86-87.34 64.11-12.21"/>
            <path id="Right_Wing_Markings" className="cls-5" d="m430.19 292.71 312.1 158.12v11.34l-221.12-87.84-64.09-12.21"/>
          </g>
          <g id="Doors" >
            <g id="Rear_Doors" transform="matrix(1, 0, 0, 1, 0, -70.830019)" >
              <path
                  id="AFT_Left_PS_PSS"
                  className="cls-2"
                  d="M352.06 650.21h5.13c1.55 0 2.74-1.36 2.54-2.9l-1.55-11.75a2.558 2.558 0 0 0-2.54-2.23h-6.16"
                  style={{
                      stroke: '#6bbe45',
                      strokeWidth: 2,
                      fill: aftLeftStatus ? '#6bbe45' : 'none',
                      strokeMiterlimit: 10,
                  }}
              />
              <path
                  id="AFT_Right_CAT"
                  className="cls-2"
                  d="M424.48 650.21h-5.13c-1.55 0-2.74-1.36-2.54-2.9l1.55-11.75a2.558 2.558 0 0 1 2.54-2.23h6.16"
                  style={{
                    stroke: '#6bbe45',
                    strokeWidth: 2,
                    fill: aftRightStatus ? '#6bbe45' : 'none',
                    strokeMiterlimit: 10,
                  }}
              />
            </g>
            <g id="Emergency_Doors" transform="matrix(1, 0, 0, 1, 0, 70.829981)" >
            <path
                id="FWD_Left_EMG"
                className="cls-2"
                d="M 346.2 272.22 L 349.34 272.22 C 350.29 272.22 351.06 271.45 351.06 270.5 L 351.06 262.89 C 351.06 261.94 350.29 261.17 349.34 261.17 L 346.2 261.17"
                style={{
                  stroke: '#6bbe45',
                  strokeWidth: 2,
                  fill: 'none',
                  strokeMiterlimit: 10,
                  }}
                />
          <path
              id="FWD_Right_EMG"
              className="cls-2"
              d="M 430.28 272.22 L 427.14 272.22 C 426.19 272.22 425.42 271.45 425.42 270.5 L 425.42 262.89 C 425.42 261.94 426.19 261.17 427.14 261.17 L 430.28 261.17"
              style={{
                stroke: '#6bbe45',
                strokeWidth: 2,
                fill: 'none',
                strokeMiterlimit: 10,
              }}
          />
            </g>
            <g id="Front_Doors" transform="matrix(1, 0, 0, 1, 0, 70.799998)" >
              <path
                  id="FWD_Right_CAT"
                  className="cls-2"
                  d="M430.28 118.06h-9.08a2.67 2.67 0 0 1-2.67-2.67v-11.72a2.67 2.67 0 0 1 2.67-2.67h8.38"
                  style={{
                    stroke: '#6bbe45',
                    strokeWidth: 2,
                    fill: cabinRightStatus ? '#6bbe45' : 'none',
                    strokeMiterlimit: 10,
                  }}
              />
              <path
                  id="FWD_Left_PS_PSS"
                  className="cls-2"
                  d="M346.2 118.06h9.08a2.67 2.67 0 0 0 2.67-2.67v-11.72a2.67 2.67 0 0 0-2.67-2.67h-8.38"
                  style={{
                    stroke: '#6bbe45',
                    strokeWidth: 2,
                    fill: cabinLeftStatus ? '#6bbe45' : 'none',
                    strokeMiterlimit: 10,
                  }}
              />
            </g>
            <g id="Cargo_Doors" transform="matrix(1, 0, 0, 1, 0, 70.830004)" >
              <g id="BLK_Cargo" transform="matrix(1, 0, 0, 1, 0, -35.360021)">
                <path className="cls-2" d="M430.19 553.33h-2" />
                <path
                      d="M423.87 553.33h-7.83c-1.4 0-2.54 1.14-2.54 2.54v15.25c0 1.4 1.14 2.54 2.54 2.54h9.99"
                      style={{
                          strokeDasharray: '0 0 4.32 4.32',
                          stroke: '#6bbe45',
                          strokeWidth: 2,
                          fill: 'none',
                          strokeMiterlimit: 10,
                       }}
                />
                <path className="cls-2" d="M428.19 573.67h2"/>
              </g>
              <g id="FWD_Cargo">
                <path className="cls-2" d="M430.28 154.67h-2" />
                <path
                  d="M424.2 154.67h-15.17c-2.13 0-3.86 1.73-3.86 3.86v26.94c0 2.13 1.73 3.86 3.86 3.86h17.21"
                  style={{
                    strokeDasharray: '0 0 4.08 4.08',
                    stroke: '#6bbe45',
                    strokeWidth: 2,
                    fill: 'none',
                    strokeMiterlimit: 10,
                  }}
                />
                <path className="cls-2" d="M428.28 189.33h2" />
              </g>
            </g>
          </g>
        </g>
        <g id="SVG_Main_Lines">
          <g id="Rear_Stablizer" transform="matrix(1, 0, 0, 1, 0, -70.839968)" >
            <g id="Right_Fin">
              <path
                  id="Right_Elevator"
                  className="cls-1"
                  d="m409.78 769.69 3.03-21.36 109.98 38.56"
              />
              <path
                  id="Right_Fin_Outline"
                  className="cls-4"
                  d="M405.01 769.34c3.31-.08 7.06.74 8.21 1.02 3.98.98 109.58 24.53 109.58 24.53v-12.35c0-6.22-1.16-14.42-6.88-17.99.08.17-86.62-55.2-86.62-55.2-5.14-3.32-10.2-6.8-12.7-16.62"
              />
            </g>
            <g id="Left_Fin">
              <path
                  id="Left_Elevator"
                  className="cls-1"
                  d="m366.7 769.69-3.03-21.36-109.98 38.56"
              />
              <path
                  id="Left_Fin_Outline"
                  className="cls-4"
                  d="M371.47 769.34c-3.31-.08-7.06.74-8.21 1.02-3.98.98-109.58 24.53-109.58 24.53v-12.35c0-6.22 1.16-14.42 6.88-17.99-.08.17 86.62-55.2 86.62-55.2 5.14-3.32 10.2-6.8 12.7-16.62"
              />
            </g>
            <path
                  id="Rudder"
                  className="cls-4"
                  d="M388.5 796.17s-6-61-6-87.33 2.5-75.5 6-75.5h.07c3.5 0 5.93 49.17 5.93 75.5s-6 87.33-6 87.33"
            />
          </g>
          <g id="Wings" transform="matrix(1, 0, 0, 1, 0, 15.600006)" >
            <g id="Right_Wing">
              <g id="Right_Slats">
                <path
                    id="Inner_Slats"
                    className="cls-1"
                    d="M436.35 283.52v10.37L500.48 327l4.56-7.85"
                />
                <g id="Main_Slats">
                  <path
                      id="Outer_Divider"
                      className="cls-1"
                      d="m692.06 423.46 3.29-5.59"
                  />
                  <path
                      id="Middle_Divider"
                      className="cls-1"
                      d="m637.09 395.69 3.77-6.09"
                  />
                  <path id="Inner_Divider" className="cls-1" d="m582.46 368.11 3.63-6.92"/>
                  <path id="Main_Slats_Outline" className="cls-1" d="m740.33 441.28-3.3 4.89-216.28-109.23v-9.72"/>
                </g>
              </g>
              <g id="Right_Wing_Flap_Fairings">
                <path id="Outer" className="cls-1" d="M645.34 447.05c-.41 8.89 2.83 18.13 2.83 18.13s2.62-8.94 2.87-16.34"/>
                <path id="Middle" className="cls-1" d="M565.52 422.12c-.15 6.84 3.02 17.3 3.02 17.3s3.04-10.89 3.24-15.35"/>
                <path id="Inner" className="cls-1" d="M490.43 409.89c0 6.63 3.2 15.28 3.2 15.28s2.71-9.28 2.71-15.28"/>
              </g>
              <g id="Right_Flaps">
                <path id="Flap_Divider" className="cls-1" d="M527.05 410.11v-11.35"/>
                <path id="Flap_Outline" className="cls-1" d="M430.28 397.92h94.45l156.08 56.58v3.63"/>
              </g>
              <g id="Right_Spoilers">
                <path id="Inner_Spoiler" className="cls-1" d="M494.37 397.92V384h30.34l.08 13.92"/>
                <g id="Main_Spoilers">
                  <path id="Outer_Divider-2" className="cls-1" d="m639.29 439.42 4.96-13.81"/>
                  <path id="Middle_Divider-2" className="cls-1" d="m606.89 427.68 5.25-13.7"/>
                  <path id="Inner_Divider-2" className="cls-1" d="m570.46 414.47 5.34-13.65"/>
                  <path id="Main_Spoiler_Outline" className="cls-1" d="m534.5 401.44 6.37-13.27 135.75 49.16-4.68 13.93"/>
                </g>
              </g>
              <path id="Right_Aileron" className="cls-1" d="M742.29 476.96v-13.35l-56.26-20.22-1.39 2.78v12.73"/>
              <g id="ENG_2-2">
                <path id="Engine_Mount-3" className="cls-1" d="M511.05 321.93V274.5c0-5.5 1.29-10.5 4.29-10.5h.05c3 0 4.33 5 4.33 10.5v51.92"/>
                <path id="Engine" className="cls-4" d="M519.72 320.06h15.53c.62 0 1.15-.43 1.26-1.04.72-3.83 3.13-17.76 3.13-34.18 0-19.33-1.92-31.04-3-32.5-1.67-2.25-4.6-3.94-21.18-3.94h-.15c-16.58 0-19.5 1.69-21.17 3.94-1.08 1.46-3 13.17-3 32.5 0 11.27 1.13 21.38 2.08 27.84"/>
                <path id="Exhaust" className="cls-1" d="M530.05 320.06s-1.97 8.42-3.34 10"/>
                <path id="Engine_Inner_end" className="cls-4" d="M507.45 320.06h3.6"/>
                <path id="Cowling" className="cls-1" d="M493.6 255.65c0-4.06 43.58-4.06 43.58 0"/>
              </g>
              <path id="Right_Wing_Outliine" className="cls-4" d="M430.28 409.89h96.07l225.04 70.28s3.99 14.18 5.65 14.18-3.56-29.35-3.74-30.59c0 0-2.65-17.49-13.84-23.29S435.68 282.9 435.68 282.9c-2.57-1.57-5.39-30-5.39-30"/>
            </g>
            <g id="Left_Wing">
              <g id="Left_Slats">
                <path id="Inner_Slats-2" className="cls-1" d="M339.62 283.52v10.37L275.5 327l-4.57-7.85"/>
                <g id="Main_Slats-2">
                  <path id="Outer_Divider-3" className="cls-1" d="m83.92 423.46-3.3-5.59"/>
                  <path id="Middle_Divider-3" className="cls-1" d="m138.89 395.69-3.78-6.09"/>
                  <path id="Inner_Divider-3" className="cls-1" d="m193.51 368.11-3.62-6.92"/>
                  <path id="Main_Slats_Outline-2" className="cls-1" d="m35.65 441.28 3.29 4.89 216.28-109.23v-9.72"/>
                </g>
              </g>
              <g id="Left_Wing_Flap_Fairings">
                <path id="Outer-2" className="cls-1" d="M131.14 447.05c.41 8.89-2.83 18.13-2.83 18.13s-2.62-8.94-2.87-16.34"/>
                <path id="Middle-2" className="cls-1" d="M210.96 422.12c.15 6.84-3.02 17.3-3.02 17.3s-3.04-10.89-3.24-15.35"/>
                <path id="Inner-2" className="cls-1" d="M286.05 409.89c0 6.63-3.2 15.28-3.2 15.28s-2.71-9.28-2.71-15.28"/>
              </g>
              <g id="Left_Flaps">
                <path id="Flap_Divider-2" className="cls-1" d="M249.43 410.11v-11.35"/>
                <path id="Flap_Outline-2" className="cls-1" d="M346.2 397.92h-94.45L95.67 454.5v3.63"/>
              </g>
              <g id="Left_Spoilers">
                <path id="Inner_Spoiler-2" className="cls-1" d="M282.17 397.92V384h-30.34l-.08 13.92"/>
                <g id="Main_Spoilers-2">
                  <path id="Outer_Divider-4" className="cls-1" d="m137.25 439.42-4.96-13.81"/>
                  <path id="Middle_Divider-4" className="cls-1" d="m169.65 427.68-5.25-13.7"/>
                  <path id="Inner_Divider-4" className="cls-1" d="m206.08 414.47-5.34-13.65"/>
                  <path id="Main_Spoilers_Outline" className="cls-1" d="m242.04 401.44-6.37-13.27-135.75 49.16 4.68 13.93"/>
                </g>
              </g>
              <path id="Left_Aileron" className="cls-1" d="M35.36 476.96v-13.35l56.25-20.22 1.39 2.78v12.73"/>
              <g id="ENG_1-2">
                <path id="Engine_Mount-4" className="cls-1" d="M265.58 321.93V274.5c0-5.5-1.29-10.5-4.29-10.5h-.05c-3 0-4.33 5-4.33 10.5v51.92"/>
                <path id="Engine-2" className="cls-4" d="M256.92 320.06h-15.53c-.62 0-1.15-.43-1.26-1.04-.72-3.83-3.13-17.76-3.13-34.18 0-19.33 1.92-31.04 3-32.5 1.67-2.25 4.6-3.94 21.18-3.94h.15c16.58 0 19.5 1.69 21.17 3.94 1.08 1.46 3 13.17 3 32.5 0 11.27-1.13 21.38-2.08 27.84"/>
                <path id="Exhaust-2" className="cls-1" d="M246.58 320.06s1.97 8.42 3.34 10"/>
                <path id="Engine_Inner_end-2" className="cls-4" d="M269.19 320.06h-3.61"/>
                <path id="Cowling-2" className="cls-1" d="M239.46 255.65c0-4.06 43.58-4.06 43.58 0"/>
              </g>
              <path id="Left_Wing_Outline" className="cls-4" d="M346.2 409.89h-96.07L25.09 480.17s-3.99 14.18-5.65 14.18S23 465 23.18 463.76c0 0 2.65-17.49 13.84-23.29C48.21 434.67 340.8 282.9 340.8 282.9c2.57-1.57 5.39-30 5.39-30"/>
            </g>
          </g>
          <g id="Fuselage">
            <path id="APU_Exhaust" className="cls-1" d="M 384.38 738.991 L 384.97 738.911 C 387.31 738.611 389.68 738.631 392.01 738.971 L 392.09 738.971" />
            <g id="Cockpit_Windows" transform="matrix(1, 0, 0, 1, 0, 70.831011)" >
              <g id="Cockpit_Windows_Left">
                <path className="cls-1" d="m373.46 47.17 12.18-6.93c.37-.21.6-.6.6-1.02v-7c0-.92-1.04-1.47-1.8-.95l-14.67 10c-.6.41-.75 1.24-.32 1.83l2.72 3.79a1 1 0 0 0 1.3.28ZM367.17 44.57l2.08 2.55c.21.26.33.58.33.92v2.37c0 .31-.08.61-.24.88l-3.39 5.74c-.24.4-.67.65-1.14.65h-3.74c-.63 0-1.14-.51-1.14-1.14v-.49c0-.29.07-.58.21-.84l5.53-10.49a.906.906 0 0 1 1.51-.15ZM364.33 61.34l-2.56 6.51c-.07.18-.18.34-.31.48l-3.05 3.5c-.54.62-1.32.98-2.15.98h-1.17c-.9 0-1.5-.91-1.16-1.74L358.15 61c.19-.43.61-.71 1.08-.71h4.37c.54 0 .92.55.72 1.06Z"/>
              </g>
              <g id="Cockpit_Windows_Right">
                <path className="cls-1" d="m402.93 47.17-12.18-6.93c-.37-.21-.6-.6-.6-1.02v-7c0-.92 1.04-1.47 1.8-.95l14.67 10c.6.41.75 1.24.32 1.83l-2.72 3.79a1 1 0 0 1-1.3.28ZM409.22 44.57l-2.08 2.55c-.21.26-.33.58-.33.92v2.37c0 .31.08.61.24.88l3.39 5.74c.24.4.67.65 1.14.65h3.74c.63 0 1.14-.51 1.14-1.14v-.49c0-.29-.07-.58-.21-.84l-5.53-10.49a.906.906 0 0 0-1.51-.15ZM412.06 61.34l2.56 6.51c.07.18.18.34.31.48l3.05 3.5c.54.62 1.32.98 2.15.98h1.17c.9 0 1.5-.91 1.16-1.74L418.24 61c-.19-.43-.61-.71-1.08-.71h-4.37c-.54 0-.92.55-.72 1.06Z"/>
              </g>
            </g>
            <path id="Fuselage_Outline" className="cls-4" d="M 388.23 73.75 C 392.01 73.75 396.69 76.489 401.6 82.595 C 413.48 97.364 420 113.048 425.08 130.647 C 429.28 145.193 430.27 158.914 430.27 169.673 L 430.27 564.634 C 430.27 593.132 412.28 658.692 412.28 658.692 L 408.55 674.558 C 408.45 674.979 408.39 675.408 408.38 675.846 L 407.77 689.278 C 407.19 697.38 405.17 705.895 401.76 716.142 C 398.64 725.523 395.86 736.043 390.67 740.977 C 390.552 741.084 390.386 741.147 390.21 741.15 L 386.26 741.15 C 386.08 741.15 385.91 741.092 385.8 740.977 C 380.61 736.043 377.83 725.523 374.71 716.142 C 371.3 705.895 369.28 697.38 368.7 689.278 L 368.09 675.846 C 368.078 675.413 368.021 674.983 367.92 674.558 L 364.19 658.692 C 364.19 658.692 346.2 593.132 346.2 564.634 L 346.2 169.673 C 346.2 158.914 347.19 145.193 351.39 130.647 C 356.47 113.048 362.99 97.364 374.87 82.595 C 379.78 76.489 384.38 73.75 388.16 73.75 L 388.22 73.75 L 388.23 73.75 Z" />
          </g>
        </g>
    </svg>
);

export const A319GroundServiceOutline = ({ className, cabinLeftStatus, cabinRightStatus, aftLeftStatus, aftRightStatus }: {className: string, cabinLeftStatus: boolean, cabinRightStatus: boolean, aftLeftStatus: boolean, aftRightStatus: boolean}) => (
    <svg
        id="SVG"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="777"
        height="814"
        viewBox="0 0 777 814"
    >
  <defs>
    <style>
                {
                    '.cls-1,.cls-2,.cls-4,.cls-5,.cls-7{fill:none;stroke-miterlimit:10}.cls-1,.cls-4{stroke:currentColor}.cls-2,.cls-4{stroke-width:2px}.cls-2{stroke:currentColor}.cls-5,.cls-7{stroke:currentColor;stroke-width:.5px}.cls-7{stroke:currentColor}'
                }
            </style>
  </defs>
  <g id="SVG_Detail_Lines">
    <g id="Engines" transform="matrix(1, 0, 0, 1, 0, 34.999992)">
      <g id="ENG_1">
        <g id="Strakes">
          <path id="Outer_Strake" className="cls-5" d="m245.67 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"/>
          <path id="Inner_Strake" className="cls-5" d="m276.83 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"/>
        </g>
        <g id="Reverser_Door">
          <path id="Outer_Side" className="cls-5" d="M256.92 295.91c-7.92 0-14.42-.09-19.83-.7"/>
          <path id="Inner_Side" className="cls-5" d="M265.58 295.91c7.92 0 14.42-.09 19.83-.7"/>
        </g>
        <g id="Engine_Mount">
          <g id="Connections">
            <path id="Fan_Connection" className="cls-7" d="m238.37 261.87.37-2.34c14.97-1.51 30.05-1.51 45.02 0l.37 2.34"/>
            <path id="Middle_Connection" className="cls-7" d="M261.25 252.6v5.8"/>
          </g>
          <g id="Mounts">
            <path id="Left_Mount" className="cls-5" d="M255.06 295.9v-37.5"/>
            <path id="Right_Mount" className="cls-5" d="M267.39 295.9v-37.42"/>
            <path id="Front_Mount" className="cls-5" d="M255.06 260.72h12.33"/>
          </g>
        </g>
        <path id="Wing_Mount" className="cls-5" d="m272.64 321.82-7.6 3.97-9.98 9.57"/>
      </g>
      <g id="ENG_2">
        <g id="Strakes-2">
          <path id="Outer_Strake-2" className="cls-5" d="m530.97 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"/>
          <path id="Inner_Strake-2" className="cls-5" d="m499.81 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"/>
        </g>
        <g id="Reverser_Door-2">
          <path id="Outer_Side-2" className="cls-5" d="M519.72 295.91c7.92 0 14.42-.09 19.83-.7"/>
          <path id="Inner_Side-2" className="cls-5" d="M511.05 295.91c-7.92 0-14.42-.09-19.83-.7"/>
        </g>
        <g id="Engine_Mount-2">
          <g id="Connections-2">
            <path id="Fan_Connection-2" className="cls-7" d="m538.27 261.87-.37-2.34a224.275 224.275 0 0 0-45.02 0l-.37 2.34"/>
            <path id="Middle_Connection-2" className="cls-7" d="M515.39 252.6v5.8"/>
          </g>
          <g id="Mounts-2">
            <path id="Right_Mount-2" className="cls-5" d="M521.58 295.9v-37.5"/>
            <path id="Left_Mount-2" className="cls-5" d="M509.25 295.9v-37.42"/>
            <path id="Front_Mount-2" className="cls-5" d="M521.58 260.72h-12.33"/>
          </g>
        </g>
        <path id="Wing_Mount-2" className="cls-5" d="m503.99 321.82 7.61 3.97 9.15 8.61"/>
      </g>
    </g>
    <g id="Emergency_Lines" transform="matrix(1, 0, 0, 1, 0, 35)">
      <path id="Left_Emergency_Marks" className="cls-5" d="M346.2 307h-20.55a6.31 6.31 0 0 0-6.31 6.31v84.6"/>
      <path id="Right_Emergency_Marks" className="cls-5" d="M430.18 307h20.55a6.31 6.31 0 0 1 6.31 6.31v84.6"/>
    </g>
    <g id="Wing_Layers" transform="matrix(1, 0, 0, 1, 0, 34.970013)">
      <path id="Left_Wing_Markings" className="cls-5" d="M346.2 292.33 35.36 449.78v11.89l219.86-87.34 64.11-12.21"/>
      <path id="Right_Wing_Markings" className="cls-5" d="m430.19 292.71 312.1 158.12v11.34l-221.12-87.84-64.09-12.21"/>
    </g>
    <g id="Doors">
      <g id="Rear_Doors" transform="matrix(1, 0, 0, 1, 0, -35.030018)">
        <path id="AFT_Left_PS_PSS" className="cls-2" d="M352.06 650.21h5.13c1.55 0 2.74-1.36 2.54-2.9l-1.55-11.75a2.558 2.558 0 0 0-2.54-2.23h-6.16"
                          style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: aftLeftStatus ? '#6bbe45' : 'none',
                            strokeMiterlimit: 10,
                        }}
                        />
        <path id="AFT_Right_CAT" className="cls-2" d="M424.48 650.21h-5.13c-1.55 0-2.74-1.36-2.54-2.9l1.55-11.75a2.558 2.558 0 0 1 2.54-2.23h6.16"
        style={{
                    stroke: '#6bbe45',
                    strokeWidth: 2,
                    fill: aftRightStatus ? '#6bbe45' : 'none',
                    strokeMiterlimit: 10,
                  }}
                  />
      </g>
      <g id="Emergency_Doors" transform="matrix(1, 0, 0, 1, 0, 35.02998)">
        <path id="FWD_Left_EMG" className="cls-2" d="M346.2 319.32h3.14c.95 0 1.72-.77 1.72-1.72v-7.61c0-.95-.77-1.72-1.72-1.72h-3.14"
                      style={{
                        stroke: '#6bbe45',
                        strokeWidth: 2,
                        fill: 'none',
                        strokeMiterlimit: 10,
                      }}/>
        <path id="FWD_Right_EMG" className="cls-2" d="M430.28 319.32h-3.14c-.95 0-1.72-.77-1.72-1.72v-7.61c0-.95.77-1.72 1.72-1.72h3.14"
                      style={{
                        stroke: '#6bbe45',
                        strokeWidth: 2,
                        fill: 'none',
                        strokeMiterlimit: 10,
                      }}/>
      </g>
      <g id="Front_Doors" transform="matrix(1, 0, 0, 1, 0, 35)">
        <path id="FWD_Right_CAT" className="cls-2" d="M430.28 118.06h-9.08a2.67 2.67 0 0 1-2.67-2.67v-11.72a2.67 2.67 0 0 1 2.67-2.67h8.38"
                                style={{
                                  stroke: '#6bbe45',
                                  strokeWidth: 2,
                                  fill: cabinRightStatus ? '#6bbe45' : 'none',
                                  strokeMiterlimit: 10,
                              }}/>
        <path id="FWD_Left_PS_PSS" className="cls-2" d="M346.2 118.06h9.08a2.67 2.67 0 0 0 2.67-2.67v-11.72a2.67 2.67 0 0 0-2.67-2.67h-8.38"
                          style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: cabinLeftStatus ? '#6bbe45' : 'none',
                            strokeMiterlimit: 10,
                          }}/>
      </g>
      <g id="Cargo_Doors">
        <g id="BLK_Cargo" transform="matrix(1, 0, 0, 1, 0, 16.969982)">
          <path className="cls-2" d="M430.19 553.33h-2"/>
          <path d="M423.87 553.33h-7.83c-1.4 0-2.54 1.14-2.54 2.54v15.25c0 1.4 1.14 2.54 2.54 2.54h9.99"
                                style={{
                                    strokeDasharray: '0 0 4.32 4.32',
                                    stroke: '#6bbe45',
                                    strokeWidth: 2,
                                    fill: 'none',
                                    strokeMiterlimit: 10,
                                 }}
                                 />
          <path className="cls-2" d="M428.19 573.67h2"/>
        </g>
        <g id="AFT_Cargo" transform="matrix(1, 0, 0, 1, 0, 35)" >
          <path className="cls-2" d="M430.18 503h-2"/>
          <path d="M424.16 503h-14.91c-1.98 0-3.58-1.6-3.58-3.58v-27.33c0-1.98 1.6-3.58 3.58-3.58h17.02"
          style={{
                    strokeDasharray: '0 0 4.08 4.08',
                    stroke: '#6bbe45',
                    strokeWidth: 2,
                    fill: 'none',
                    strokeMiterlimit: 10,
                  }}
                  />
          <path className="cls-2" d="M428.28 468.5h2"/>
        </g>
        <g id="FWD_Cargo" transform="matrix(1, 0, 0, 1, 0, 35.030003)" >
          <path className="cls-2" d="M430.28 154.67h-2"/>
          <path d="M424.2 154.67h-15.17c-2.13 0-3.86 1.73-3.86 3.86v26.94c0 2.13 1.73 3.86 3.86 3.86h17.21"
          style={{
                                strokeDasharray: '0 0 4.08 4.08',
                                stroke: '#6bbe45',
                                strokeWidth: 2,
                                fill: 'none',
                                strokeMiterlimit: 10,
                            }}/>
          <path className="cls-2" d="M428.28 189.33h2"/>
        </g>
      </g>
    </g>
  </g>
  <g id="SVG_Main_Lines">
    <g id="Rear_Stablizer" transform="matrix(1, 0, 0, 1, 0, -35.039967)" >
      <g id="Right_Fin">
        <path id="Right_Elevator" className="cls-1" d="m409.78 769.69 3.03-21.36 109.98 38.56"/>
        <path id="Right_Fin_Outline" className="cls-4" d="M405.01 769.34c3.31-.08 7.06.74 8.21 1.02 3.98.98 109.58 24.53 109.58 24.53v-12.35c0-6.22-1.16-14.42-6.88-17.99.08.17-86.62-55.2-86.62-55.2-5.14-3.32-10.2-6.8-12.7-16.62"/>
      </g>
      <g id="Left_Fin">
        <path id="Left_Elevator" className="cls-1" d="m366.7 769.69-3.03-21.36-109.98 38.56"/>
        <path id="Left_Fin_Outline" className="cls-4" d="M371.47 769.34c-3.31-.08-7.06.74-8.21 1.02-3.98.98-109.58 24.53-109.58 24.53v-12.35c0-6.22 1.16-14.42 6.88-17.99-.08.17 86.62-55.2 86.62-55.2 5.14-3.32 10.2-6.8 12.7-16.62"/>
      </g>
      <path id="Rudder" className="cls-4" d="M388.5 796.17s-6-61-6-87.33 2.5-75.5 6-75.5h.07c3.5 0 5.93 49.17 5.93 75.5s-6 87.33-6 87.33"/>
    </g>
    <g id="Wings">
      <g id="Right_Wing" transform="matrix(1, 0, 0, 1, 0, 35.000008)">
        <g id="Right_Slats">
          <path id="Inner_Slats" className="cls-1" d="M436.35 283.52v10.37L500.48 327l4.56-7.85"/>
          <g id="Main_Slats">
            <path id="Outer_Divider" className="cls-1" d="m692.06 423.46 3.29-5.59"/>
            <path id="Middle_Divider" className="cls-1" d="m637.09 395.69 3.77-6.09"/>
            <path id="Inner_Divider" className="cls-1" d="m582.46 368.11 3.63-6.92"/>
            <path id="Main_Slats_Outline" className="cls-1" d="m740.33 441.28-3.3 4.89-216.28-109.23v-9.72"/>
          </g>
        </g>
        <g id="Right_Wing_Flap_Fairings">
          <path id="Outer" className="cls-1" d="M645.34 447.05c-.41 8.89 2.83 18.13 2.83 18.13s2.62-8.94 2.87-16.34"/>
          <path id="Middle" className="cls-1" d="M565.52 422.12c-.15 6.84 3.02 17.3 3.02 17.3s3.04-10.89 3.24-15.35"/>
          <path id="Inner" className="cls-1" d="M490.43 409.89c0 6.63 3.2 15.28 3.2 15.28s2.71-9.28 2.71-15.28"/>
        </g>
        <g id="Right_Flaps">
          <path id="Flap_Divider" className="cls-1" d="M527.05 410.11v-11.35"/>
          <path id="Flap_Outline" className="cls-1" d="M430.28 397.92h94.45l156.08 56.58v3.63"/>
        </g>
        <g id="Right_Spoilers">
          <path id="Inner_Spoiler" className="cls-1" d="M494.37 397.92V384h30.34l.08 13.92"/>
          <g id="Main_Spoilers">
            <path id="Outer_Divider-2" className="cls-1" d="m639.29 439.42 4.96-13.81"/>
            <path id="Middle_Divider-2" className="cls-1" d="m606.89 427.68 5.25-13.7"/>
            <path id="Inner_Divider-2" className="cls-1" d="m570.46 414.47 5.34-13.65"/>
            <path id="Main_Spoiler_Outline" className="cls-1" d="m534.5 401.44 6.37-13.27 135.75 49.16-4.68 13.93"/>
          </g>
        </g>
        <path id="Right_Aileron" className="cls-1" d="M742.29 476.96v-13.35l-56.26-20.22-1.39 2.78v12.73"/>
        <g id="ENG_2-2">
          <path id="Engine_Mount-3" className="cls-1" d="M511.05 321.93V274.5c0-5.5 1.29-10.5 4.29-10.5h.05c3 0 4.33 5 4.33 10.5v51.92"/>
          <path id="Engine" className="cls-4" d="M519.72 320.06h15.53c.62 0 1.15-.43 1.26-1.04.72-3.83 3.13-17.76 3.13-34.18 0-19.33-1.92-31.04-3-32.5-1.67-2.25-4.6-3.94-21.18-3.94h-.15c-16.58 0-19.5 1.69-21.17 3.94-1.08 1.46-3 13.17-3 32.5 0 11.27 1.13 21.38 2.08 27.84"/>
          <path id="Exhaust" className="cls-1" d="M530.05 320.06s-1.97 8.42-3.34 10"/>
          <path id="Engine_Inner_end" className="cls-4" d="M507.45 320.06h3.6"/>
          <path id="Cowling" className="cls-1" d="M493.6 255.65c0-4.06 43.58-4.06 43.58 0"/>
        </g>
        <path id="Right_Wing_Outliine" className="cls-4" d="M430.28 409.89h96.07l225.04 70.28s3.99 14.18 5.65 14.18-3.56-29.35-3.74-30.59c0 0-2.65-17.49-13.84-23.29S435.68 282.9 435.68 282.9c-2.57-1.57-5.39-30-5.39-30"/>
      </g>
      <g id="Left_Wing" transform="matrix(1, 0, 0, 1, 0, 35.000008)">
        <g id="Left_Slats">
          <path id="Inner_Slats-2" className="cls-1" d="M339.62 283.52v10.37L275.5 327l-4.57-7.85"/>
          <g id="Main_Slats-2">
            <path id="Outer_Divider-3" className="cls-1" d="m83.92 423.46-3.3-5.59"/>
            <path id="Middle_Divider-3" className="cls-1" d="m138.89 395.69-3.78-6.09"/>
            <path id="Inner_Divider-3" className="cls-1" d="m193.51 368.11-3.62-6.92"/>
            <path id="Main_Slats_Outline-2" className="cls-1" d="m35.65 441.28 3.29 4.89 216.28-109.23v-9.72"/>
          </g>
        </g>
        <g id="Left_Wing_Flap_Fairings">
          <path id="Outer-2" className="cls-1" d="M131.14 447.05c.41 8.89-2.83 18.13-2.83 18.13s-2.62-8.94-2.87-16.34"/>
          <path id="Middle-2" className="cls-1" d="M210.96 422.12c.15 6.84-3.02 17.3-3.02 17.3s-3.04-10.89-3.24-15.35"/>
          <path id="Inner-2" className="cls-1" d="M286.05 409.89c0 6.63-3.2 15.28-3.2 15.28s-2.71-9.28-2.71-15.28"/>
        </g>
        <g id="Left_Flaps">
          <path id="Flap_Divider-2" className="cls-1" d="M249.43 410.11v-11.35"/>
          <path id="Flap_Outline-2" className="cls-1" d="M346.2 397.92h-94.45L95.67 454.5v3.63"/>
        </g>
        <g id="Left_Spoilers">
          <path id="Inner_Spoiler-2" className="cls-1" d="M282.17 397.92V384h-30.34l-.08 13.92"/>
          <g id="Main_Spoilers-2">
            <path id="Outer_Divider-4" className="cls-1" d="m137.25 439.42-4.96-13.81"/>
            <path id="Middle_Divider-4" className="cls-1" d="m169.65 427.68-5.25-13.7"/>
            <path id="Inner_Divider-4" className="cls-1" d="m206.08 414.47-5.34-13.65"/>
            <path id="Main_Spoilers_Outline" className="cls-1" d="m242.04 401.44-6.37-13.27-135.75 49.16 4.68 13.93"/>
          </g>
        </g>
        <path id="Left_Aileron" className="cls-1" d="M35.36 476.96v-13.35l56.25-20.22 1.39 2.78v12.73"/>
        <g id="ENG_1-2">
          <path id="Engine_Mount-4" className="cls-1" d="M265.58 321.93V274.5c0-5.5-1.29-10.5-4.29-10.5h-.05c-3 0-4.33 5-4.33 10.5v51.92"/>
          <path id="Engine-2" className="cls-4" d="M256.92 320.06h-15.53c-.62 0-1.15-.43-1.26-1.04-.72-3.83-3.13-17.76-3.13-34.18 0-19.33 1.92-31.04 3-32.5 1.67-2.25 4.6-3.94 21.18-3.94h.15c16.58 0 19.5 1.69 21.17 3.94 1.08 1.46 3 13.17 3 32.5 0 11.27-1.13 21.38-2.08 27.84"/>
          <path id="Exhaust-2" className="cls-1" d="M246.58 320.06s1.97 8.42 3.34 10"/>
          <path id="Engine_Inner_end-2" className="cls-4" d="M269.19 320.06h-3.61"/>
          <path id="Cowling-2" className="cls-1" d="M239.46 255.65c0-4.06 43.58-4.06 43.58 0"/>
        </g>
        <path id="Left_Wing_Outline" className="cls-4" d="M346.2 409.89h-96.07L25.09 480.17s-3.99 14.18-5.65 14.18S23 465 23.18 463.76c0 0 2.65-17.49 13.84-23.29C48.21 434.67 340.8 282.9 340.8 282.9c2.57-1.57 5.39-30 5.39-30"/>
      </g>
    </g>
    <g id="Fuselage">
      <path id="APU_Exhaust" className="cls-1" d="M 384.38 774.791 L 384.97 774.711 C 387.31 774.411 389.68 774.431 392.01 774.771 L 392.09 774.771" />
      <g id="Cockpit_Windows" transform="matrix(1, 0, 0, 0.999017, 0, 35.061554)" >
        <g id="Cockpit_Windows_Left">
          <path className="cls-1" d="m373.46 47.17 12.18-6.93c.37-.21.6-.6.6-1.02v-7c0-.92-1.04-1.47-1.8-.95l-14.67 10c-.6.41-.75 1.24-.32 1.83l2.72 3.79a1 1 0 0 0 1.3.28ZM367.17 44.57l2.08 2.55c.21.26.33.58.33.92v2.37c0 .31-.08.61-.24.88l-3.39 5.74c-.24.4-.67.65-1.14.65h-3.74c-.63 0-1.14-.51-1.14-1.14v-.49c0-.29.07-.58.21-.84l5.53-10.49a.906.906 0 0 1 1.51-.15ZM364.33 61.34l-2.56 6.51c-.07.18-.18.34-.31.48l-3.05 3.5c-.54.62-1.32.98-2.15.98h-1.17c-.9 0-1.5-.91-1.16-1.74L358.15 61c.19-.43.61-.71 1.08-.71h4.37c.54 0 .92.55.72 1.06Z"/>
        </g>
        <g id="Cockpit_Windows_Right">
          <path className="cls-1" d="m402.93 47.17-12.18-6.93c-.37-.21-.6-.6-.6-1.02v-7c0-.92 1.04-1.47 1.8-.95l14.67 10c.6.41.75 1.24.32 1.83l-2.72 3.79a1 1 0 0 1-1.3.28ZM409.22 44.57l-2.08 2.55c-.21.26-.33.58-.33.92v2.37c0 .31.08.61.24.88l3.39 5.74c.24.4.67.65 1.14.65h3.74c.63 0 1.14-.51 1.14-1.14v-.49c0-.29-.07-.58-.21-.84l-5.53-10.49a.906.906 0 0 0-1.51-.15ZM412.06 61.34l2.56 6.51c.07.18.18.34.31.48l3.05 3.5c.54.62 1.32.98 2.15.98h1.17c.9 0 1.5-.91 1.16-1.74L418.24 61c-.19-.43-.61-.71-1.08-.71h-4.37c-.54 0-.92.55-.72 1.06Z"/>
        </g>
      </g>
      <path id="Fuselage_Outline" className="cls-4" d="M 388.23 38 C 392.01 38 396.69 40.943 401.6 47.502 C 413.48 63.368 420 80.219 425.08 99.125 C 429.28 114.752 430.27 129.493 430.27 141.052 L 430.27 565.366 C 430.27 595.982 412.28 666.414 412.28 666.414 L 408.55 683.459 C 408.45 683.912 408.39 684.372 408.38 684.842 L 407.77 699.273 C 407.19 707.977 405.17 717.125 401.76 728.133 C 398.64 738.212 395.86 749.513 390.67 754.814 C 390.552 754.929 390.386 754.996 390.21 755 L 386.26 755 C 386.08 755 385.91 754.938 385.8 754.814 C 380.61 749.513 377.83 738.212 374.71 728.133 C 371.3 717.125 369.28 707.977 368.7 699.273 L 368.09 684.842 C 368.078 684.378 368.021 683.915 367.92 683.459 L 364.19 666.414 C 364.19 666.414 346.2 595.982 346.2 565.366 L 346.2 141.052 C 346.2 129.493 347.19 114.752 351.39 99.125 C 356.47 80.219 362.99 63.368 374.87 47.502 C 379.78 40.943 384.38 38 388.16 38 L 388.22 38 L 388.23 38 Z"/>
    </g>
  </g>
</svg>
);

export const A320GroundServiceOutline = ({
  className,
  cabinLeftStatus,
  cabinRightStatus,
  aftLeftStatus,
  aftRightStatus,
}: {
  className: string;
  cabinLeftStatus: boolean;
  cabinRightStatus: boolean;
  aftLeftStatus: boolean;
  aftRightStatus: boolean;
}) => (
  <svg id="SVG" className={className} xmlns="http://www.w3.org/2000/svg" width="777" height="814" viewBox="0 0 777 814">
        <defs>
            <style>
                {
                    '.cls-1,.cls-2,.cls-4,.cls-5,.cls-7{fill:none;stroke-miterlimit:10}.cls-1,.cls-4{stroke:currentColor}.cls-2,.cls-4{stroke-width:2px}.cls-2{stroke:currentColor}.cls-5,.cls-7{stroke:currentColor;stroke-width:.5px}.cls-7{stroke:currentColor}'
                }
            </style>
        </defs>
        <g id="SVG_Detail_Lines">
            <g id="Engines">
                <g id="ENG_1">
                    <g id="Strakes">
                        <path
                            id="Outer_Strake"
                            className="cls-5"
                            d="m245.67 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"
                        />
                        <path
                            id="Inner_Strake"
                            className="cls-5"
                            d="m276.83 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"
                        />
                    </g>
                    <g id="Reverser_Door">
            <path id="Outer_Side" className="cls-5" d="M256.92 295.91c-7.92 0-14.42-.09-19.83-.7" />
            <path id="Inner_Side" className="cls-5" d="M265.58 295.91c7.92 0 14.42-.09 19.83-.7" />
                    </g>
                    <g id="Engine_Mount">
                        <g id="Connections">
                            <path
                                id="Fan_Connection"
                                className="cls-7"
                                d="m238.37 261.87.37-2.34c14.97-1.51 30.05-1.51 45.02 0l.37 2.34"
                            />
              <path id="Middle_Connection" className="cls-7" d="M261.25 252.6v5.8" />
                        </g>
                        <g id="Mounts">
                            <path id="Left_Mount" className="cls-5" d="M255.06 295.9v-37.5" />
              <path id="Right_Mount" className="cls-5" d="M267.39 295.9v-37.42" />
              <path id="Front_Mount" className="cls-5" d="M255.06 260.72h12.33" />
                        </g>
                    </g>
          <path id="Wing_Mount" className="cls-5" d="m272.64 321.82-7.6 3.97-9.98 9.57" />
                </g>
                <g id="ENG_2">
                    <g id="Strakes-2">
                        <path
                            id="Outer_Strake-2"
                            className="cls-5"
                            d="m530.97 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"
                        />
                        <path
                            id="Inner_Strake-2"
                            className="cls-5"
                            d="m499.81 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"
                        />
                    </g>
                    <g id="Reverser_Door-2">
            <path id="Outer_Side-2" className="cls-5" d="M519.72 295.91c7.92 0 14.42-.09 19.83-.7" />
            <path id="Inner_Side-2" className="cls-5" d="M511.05 295.91c-7.92 0-14.42-.09-19.83-.7" />
                    </g>
                    <g id="Engine_Mount-2">
                        <g id="Connections-2">
                            <path
                                id="Fan_Connection-2"
                                className="cls-7"
                                d="m538.27 261.87-.37-2.34a224.275 224.275 0 0 0-45.02 0l-.37 2.34"
                            />
              <path id="Middle_Connection-2" className="cls-7" d="M515.39 252.6v5.8" />
                        </g>
                        <g id="Mounts-2">
              <path id="Right_Mount-2" className="cls-5" d="M521.58 295.9v-37.5" />
              <path id="Left_Mount-2" className="cls-5" d="M509.25 295.9v-37.42" />
              <path id="Front_Mount-2" className="cls-5" d="M521.58 260.72h-12.33" />
                        </g>
                    </g>
          <path id="Wing_Mount-2" className="cls-5" d="m503.99 321.82 7.61 3.97 9.15 8.61" />
                </g>
            </g>
            <g id="Emergency_Lines">
        <path id="Left_Emergency_Marks" className="cls-5" d="M346.2 307h-20.55a6.31 6.31 0 0 0-6.31 6.31v84.6" />
        <path id="Right_Emergency_Marks" className="cls-5" d="M430.18 307h20.55a6.31 6.31 0 0 1 6.31 6.31v84.6" />
            </g>
            <g id="Wing_Layers">
        <path id="Left_Wing_Markings" className="cls-5" d="M346.2 292.33 35.36 449.78v11.89l219.86-87.34 64.11-12.21" />
                <path
                    id="Right_Wing_Markings"
                    className="cls-5"
                    d="m430.19 292.71 312.1 158.12v11.34l-221.12-87.84-64.09-12.21"
                />
            </g>
            <g id="Doors">
                <g id="Rear_Doors">
                    <path
                        id="AFT_Left_PS_PSS"
                        className="cls-2"
                        d="M352.06 650.21h5.13c1.55 0 2.74-1.36 2.54-2.9l-1.55-11.75a2.558 2.558 0 0 0-2.54-2.23h-6.16"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: aftLeftStatus ? '#6bbe45' : 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                    <path
                        id="AFT_Right_CAT"
                        className="cls-2"
                        d="M424.48 650.21h-5.13c-1.55 0-2.74-1.36-2.54-2.9l1.55-11.75a2.558 2.558 0 0 1 2.54-2.23h6.16"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: aftRightStatus ? '#6bbe45' : 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                </g>
                <g id="Emergency_Doors">
                    <path
                        id="AFT_Left_EMG"
                        className="cls-2"
                        d="M346.2 337.61h3.14c.95 0 1.72-.77 1.72-1.72v-7.61c0-.95-.77-1.72-1.72-1.72h-3.14"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                    <path
                        id="FWD_Left_EMG"
                        className="cls-2"
                        d="M346.2 319.32h3.14c.95 0 1.72-.77 1.72-1.72v-7.61c0-.95-.77-1.72-1.72-1.72h-3.14"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                    <path
                        id="AFT_Right_EMG"
                        className="cls-2"
                        d="M430.28 337.61h-3.14c-.95 0-1.72-.77-1.72-1.72v-7.61c0-.95.77-1.72 1.72-1.72h3.14"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                    <path
                        id="FWD_Right_EMG"
                        className="cls-2"
                        d="M430.28 319.32h-3.14c-.95 0-1.72-.77-1.72-1.72v-7.61c0-.95.77-1.72 1.72-1.72h3.14"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                </g>
                <g id="Front_Doors">
                    <path
                        id="FWD_Right_CAT"
                        className="cls-2"
                        d="M430.28 118.06h-9.08a2.67 2.67 0 0 1-2.67-2.67v-11.72a2.67 2.67 0 0 1 2.67-2.67h8.38"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: cabinRightStatus ? '#6bbe45' : 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                    <path
                        id="FWD_Left_PS_PSS"
                        className="cls-2"
                        d="M346.2 118.06h9.08a2.67 2.67 0 0 0 2.67-2.67v-11.72a2.67 2.67 0 0 0-2.67-2.67h-8.38"
                        style={{
                            stroke: '#6bbe45',
                            strokeWidth: 2,
                            fill: cabinLeftStatus ? '#6bbe45' : 'none',
                            strokeMiterlimit: 10,
                        }}
                    />
                </g>
                <g id="Cargo_Doors">
                    <g id="BLK_Cargo">
                        <path className="cls-2" d="M430.19 553.33h-2" />
                        <path
                            d="M423.87 553.33h-7.83c-1.4 0-2.54 1.14-2.54 2.54v15.25c0 1.4 1.14 2.54 2.54 2.54h9.99"
                            style={{
                                strokeDasharray: '0 0 4.32 4.32',
                                stroke: '#6bbe45',
                                strokeWidth: 2,
                                fill: 'none',
                                strokeMiterlimit: 10,
                            }}
                        />
                        <path className="cls-2" d="M428.19 573.67h2" />
                    </g>
                    <g id="AFT_Cargo">
                        <path className="cls-2" d="M430.18 503h-2" />
                        <path
                            d="M424.16 503h-14.91c-1.98 0-3.58-1.6-3.58-3.58v-27.33c0-1.98 1.6-3.58 3.58-3.58h17.02"
                            style={{
                                strokeDasharray: '0 0 4.03 4.03',
                                stroke: '#6bbe45',
                                strokeWidth: 2,
                                fill: 'none',
                                strokeMiterlimit: 10,
                            }}
                        />
                        <path className="cls-2" d="M428.28 468.5h2" />
                    </g>
                    <g id="FWD_Cargo">
                        <path className="cls-2" d="M430.28 154.67h-2" />
                        <path
                            d="M424.2 154.67h-15.17c-2.13 0-3.86 1.73-3.86 3.86v26.94c0 2.13 1.73 3.86 3.86 3.86h17.21"
                            style={{
                                strokeDasharray: '0 0 4.08 4.08',
                                stroke: '#6bbe45',
                                strokeWidth: 2,
                                fill: 'none',
                                strokeMiterlimit: 10,
                            }}
                        />
                        <path className="cls-2" d="M428.28 189.33h2" />
                    </g>
                </g>
            </g>
        </g>
        <g id="SVG_Main_Lines">
            <g id="Rear_Stablizer">
                <g id="Right_Fin">
          <path id="Right_Elevator" className="cls-1" d="m409.78 769.69 3.03-21.36 109.98 38.56" />
                    <path
                        id="Right_Fin_Outline"
                        className="cls-4"
                        d="M405.01 769.34c3.31-.08 7.06.74 8.21 1.02 3.98.98 109.58 24.53 109.58 24.53v-12.35c0-6.22-1.16-14.42-6.88-17.99.08.17-86.62-55.2-86.62-55.2-5.14-3.32-10.2-6.8-12.7-16.62"
                    />
                </g>
                <g id="Left_Fin">
          <path id="Left_Elevator" className="cls-1" d="m366.7 769.69-3.03-21.36-109.98 38.56" />
                    <path
                        id="Left_Fin_Outline"
                        className="cls-4"
                        d="M371.47 769.34c-3.31-.08-7.06.74-8.21 1.02-3.98.98-109.58 24.53-109.58 24.53v-12.35c0-6.22 1.16-14.42 6.88-17.99-.08.17 86.62-55.2 86.62-55.2 5.14-3.32 10.2-6.8 12.7-16.62"
                    />
                </g>
                <path
                    id="Rudder"
                    className="cls-4"
                    d="M388.5 796.17s-6-61-6-87.33 2.5-75.5 6-75.5h.07c3.5 0 5.93 49.17 5.93 75.5s-6 87.33-6 87.33"
                />
            </g>
            <g id="Wings">
                <g id="Right_Wing">
                    <g id="Right_Slats">
            <path id="Inner_Slats" className="cls-1" d="M436.35 283.52v10.37L500.48 327l4.56-7.85" />
                        <g id="Main_Slats">
              <path id="Outer_Divider" className="cls-1" d="m692.06 423.46 3.29-5.59" />
              <path id="Middle_Divider" className="cls-1" d="m637.09 395.69 3.77-6.09" />
              <path id="Inner_Divider" className="cls-1" d="m582.46 368.11 3.63-6.92" />
              <path id="Main_Slats_Outline" className="cls-1" d="m740.33 441.28-3.3 4.89-216.28-109.23v-9.72" />
                        </g>
                    </g>
                    <g id="Right_Wing_Flap_Fairings">
                        <path
                            id="Outer"
                            className="cls-1"
                            d="M645.34 447.05c-.41 8.89 2.83 18.13 2.83 18.13s2.62-8.94 2.87-16.34"
                        />
                        <path
                            id="Middle"
                            className="cls-1"
                            d="M565.52 422.12c-.15 6.84 3.02 17.3 3.02 17.3s3.04-10.89 3.24-15.35"
                        />
            <path id="Inner" className="cls-1" d="M490.43 409.89c0 6.63 3.2 15.28 3.2 15.28s2.71-9.28 2.71-15.28" />
                    </g>
                    <g id="Right_Flaps">
            <path id="Flap_Divider" className="cls-1" d="M527.05 410.11v-11.35" />
            <path id="Flap_Outline" className="cls-1" d="M430.28 397.92h94.45l156.08 56.58v3.63" />
                    </g>
                    <g id="Right_Spoilers">
            <path id="Inner_Spoiler" className="cls-1" d="M494.37 397.92V384h30.34l.08 13.92" />
                        <g id="Main_Spoilers">
              <path id="Outer_Divider-2" className="cls-1" d="m639.29 439.42 4.96-13.81" />
              <path id="Middle_Divider-2" className="cls-1" d="m606.89 427.68 5.25-13.7" />
              <path id="Inner_Divider-2" className="cls-1" d="m570.46 414.47 5.34-13.65" />
              <path id="Main_Spoiler_Outline" className="cls-1" d="m534.5 401.44 6.37-13.27 135.75 49.16-4.68 13.93" />
                        </g>
                    </g>
          <path id="Right_Aileron" className="cls-1" d="M742.29 476.96v-13.35l-56.26-20.22-1.39 2.78v12.73" />
                    <g id="ENG_2-2">
                        <path
                            id="Engine_Mount-3"
                            className="cls-1"
                            d="M511.05 321.93V274.5c0-5.5 1.29-10.5 4.29-10.5h.05c3 0 4.33 5 4.33 10.5v51.92"
                        />
                        <path
                            id="Engine"
                            className="cls-4"
                            d="M519.72 320.06h15.53c.62 0 1.15-.43 1.26-1.04.72-3.83 3.13-17.76 3.13-34.18 0-19.33-1.92-31.04-3-32.5-1.67-2.25-4.6-3.94-21.18-3.94h-.15c-16.58 0-19.5 1.69-21.17 3.94-1.08 1.46-3 13.17-3 32.5 0 11.27 1.13 21.38 2.08 27.84"
                        />
            <path id="Exhaust" className="cls-1" d="M530.05 320.06s-1.97 8.42-3.34 10" />
            <path id="Engine_Inner_end" className="cls-4" d="M507.45 320.06h3.6" />
            <path id="Cowling" className="cls-1" d="M493.6 255.65c0-4.06 43.58-4.06 43.58 0" />
                    </g>
                    <path
                        id="Right_Wing_Outliine"
                        className="cls-4"
                        d="M430.28 409.89h96.07l225.04 70.28s3.99 14.18 5.65 14.18-3.56-29.35-3.74-30.59c0 0-2.65-17.49-13.84-23.29S435.68 282.9 435.68 282.9c-2.57-1.57-5.39-30-5.39-30"
                    />
                </g>
                <g id="Left_Wing">
                    <g id="Left_Slats">
            <path id="Inner_Slats-2" className="cls-1" d="M339.62 283.52v10.37L275.5 327l-4.57-7.85" />
                        <g id="Main_Slats-2">
              <path id="Outer_Divider-3" className="cls-1" d="m83.92 423.46-3.3-5.59" />
              <path id="Middle_Divider-3" className="cls-1" d="m138.89 395.69-3.78-6.09" />
              <path id="Inner_Divider-3" className="cls-1" d="m193.51 368.11-3.62-6.92" />
              <path id="Main_Slats_Outline-2" className="cls-1" d="m35.65 441.28 3.29 4.89 216.28-109.23v-9.72" />
                        </g>
                    </g>
                    <g id="Left_Wing_Flap_Fairings">
                        <path
                            id="Outer-2"
                            className="cls-1"
                            d="M131.14 447.05c.41 8.89-2.83 18.13-2.83 18.13s-2.62-8.94-2.87-16.34"
                        />
                        <path
                            id="Middle-2"
                            className="cls-1"
                            d="M210.96 422.12c.15 6.84-3.02 17.3-3.02 17.3s-3.04-10.89-3.24-15.35"
                        />
            <path id="Inner-2" className="cls-1" d="M286.05 409.89c0 6.63-3.2 15.28-3.2 15.28s-2.71-9.28-2.71-15.28" />
                    </g>
                    <g id="Left_Flaps">
            <path id="Flap_Divider-2" className="cls-1" d="M249.43 410.11v-11.35" />
            <path id="Flap_Outline-2" className="cls-1" d="M346.2 397.92h-94.45L95.67 454.5v3.63" />
                    </g>
                    <g id="Left_Spoilers">
            <path id="Inner_Spoiler-2" className="cls-1" d="M282.17 397.92V384h-30.34l-.08 13.92" />
                        <g id="Main_Spoilers-2">
              <path id="Outer_Divider-4" className="cls-1" d="m137.25 439.42-4.96-13.81" />
              <path id="Middle_Divider-4" className="cls-1" d="m169.65 427.68-5.25-13.7" />
              <path id="Inner_Divider-4" className="cls-1" d="m206.08 414.47-5.34-13.65" />
                            <path
                                id="Main_Spoilers_Outline"
                                className="cls-1"
                                d="m242.04 401.44-6.37-13.27-135.75 49.16 4.68 13.93"
                            />
                        </g>
                    </g>
          <path id="Left_Aileron" className="cls-1" d="M35.36 476.96v-13.35l56.25-20.22 1.39 2.78v12.73" />
                    <g id="ENG_1-2">
                        <path
                            id="Engine_Mount-4"
                            className="cls-1"
                            d="M265.58 321.93V274.5c0-5.5-1.29-10.5-4.29-10.5h-.05c-3 0-4.33 5-4.33 10.5v51.92"
                        />
                        <path
                            id="Engine-2"
                            className="cls-4"
                            d="M256.92 320.06h-15.53c-.62 0-1.15-.43-1.26-1.04-.72-3.83-3.13-17.76-3.13-34.18 0-19.33 1.92-31.04 3-32.5 1.67-2.25 4.6-3.94 21.18-3.94h.15c16.58 0 19.5 1.69 21.17 3.94 1.08 1.46 3 13.17 3 32.5 0 11.27-1.13 21.38-2.08 27.84"
                        />
            <path id="Exhaust-2" className="cls-1" d="M246.58 320.06s1.97 8.42 3.34 10" />
            <path id="Engine_Inner_end-2" className="cls-4" d="M269.19 320.06h-3.61" />
            <path id="Cowling-2" className="cls-1" d="M239.46 255.65c0-4.06 43.58-4.06 43.58 0" />
                    </g>
                    <path
                        id="Left_Wing_Outline"
                        className="cls-4"
                        d="M346.2 409.89h-96.07L25.09 480.17s-3.99 14.18-5.65 14.18S23 465 23.18 463.76c0 0 2.65-17.49 13.84-23.29C48.21 434.67 340.8 282.9 340.8 282.9c2.57-1.57 5.39-30 5.39-30"
                    />
                </g>
            </g>
            <g id="Fuselage">
        <path id="APU_Exhaust" className="cls-1" d="m384.38 809.8.59-.08c2.34-.3 4.71-.28 7.04.06h.08" />
                <g id="Cockpit_Windows">
                    <g id="Cockpit_Windows_Left">
                        <path
                            className="cls-1"
                            d="m373.46 47.17 12.18-6.93c.37-.21.6-.6.6-1.02v-7c0-.92-1.04-1.47-1.8-.95l-14.67 10c-.6.41-.75 1.24-.32 1.83l2.72 3.79a1 1 0 0 0 1.3.28ZM367.17 44.57l2.08 2.55c.21.26.33.58.33.92v2.37c0 .31-.08.61-.24.88l-3.39 5.74c-.24.4-.67.65-1.14.65h-3.74c-.63 0-1.14-.51-1.14-1.14v-.49c0-.29.07-.58.21-.84l5.53-10.49a.906.906 0 0 1 1.51-.15ZM364.33 61.34l-2.56 6.51c-.07.18-.18.34-.31.48l-3.05 3.5c-.54.62-1.32.98-2.15.98h-1.17c-.9 0-1.5-.91-1.16-1.74L358.15 61c.19-.43.61-.71 1.08-.71h4.37c.54 0 .92.55.72 1.06Z"
                        />
                    </g>
                    <g id="Cockpit_Windows_Right">
                        <path
                            className="cls-1"
                            d="m402.93 47.17-12.18-6.93c-.37-.21-.6-.6-.6-1.02v-7c0-.92 1.04-1.47 1.8-.95l14.67 10c.6.41.75 1.24.32 1.83l-2.72 3.79a1 1 0 0 1-1.3.28ZM409.22 44.57l-2.08 2.55c-.21.26-.33.58-.33.92v2.37c0 .31.08.61.24.88l3.39 5.74c.24.4.67.65 1.14.65h3.74c.63 0 1.14-.51 1.14-1.14v-.49c0-.29-.07-.58-.21-.84l-5.53-10.49a.906.906 0 0 0-1.51-.15ZM412.06 61.34l2.56 6.51c.07.18.18.34.31.48l3.05 3.5c.54.62 1.32.98 2.15.98h1.17c.9 0 1.5-.91 1.16-1.74L418.24 61c-.19-.43-.61-.71-1.08-.71h-4.37c-.54 0-.92.55-.72 1.06Z"
                        />
                    </g>
                </g>
                <path
                    id="Fuselage_Outline"
                    className="cls-4"
                    d="M388.23 3c3.78 0 8.46 3.32 13.37 10.72 11.88 17.9 18.4 36.91 23.48 58.24 4.2 17.63 5.19 34.26 5.19 47.3v478.7c0 34.54-17.99 114-17.99 114l-3.73 19.23c-.1.51-.16 1.03-.17 1.56l-.61 16.28c-.58 9.82-2.6 20.14-6.01 32.56-3.12 11.37-5.9 24.12-11.09 30.1a.64.64 0 0 1-.46.21h-3.95c-.18 0-.35-.07-.46-.21-5.19-5.98-7.97-18.73-11.09-30.1-3.41-12.42-5.43-22.74-6.01-32.56l-.61-16.28a9.19 9.19 0 0 0-.17-1.56l-3.73-19.23s-17.99-79.46-17.99-114v-478.7c0-13.04.99-29.67 5.19-47.3 5.08-21.33 11.6-40.34 23.48-58.24C379.78 6.32 384.38 3 388.16 3h.06Z"
                />
            </g>
        </g>
    </svg>
);

export const A321GroundServiceOutline = ({ className, cabinLeftStatus, cabinRightStatus, aftLeftStatus, aftRightStatus }: {className: string, cabinLeftStatus: boolean, cabinRightStatus: boolean, aftLeftStatus: boolean, aftRightStatus: boolean}) => (
    <svg id="SVG" className={className} width="777" height="814" viewBox="0 0 777 814" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
            {
                '.cls-1,.cls-2,.cls-4,.cls-5,.cls-7{fill:none;stroke-miterlimit:10}.cls-1,.cls-4{stroke:currentColor}.cls-2,.cls-4{stroke-width:2px}.cls-2{stroke:currentColor}.cls-5,.cls-7{stroke:currentColor;stroke-width:.5px}.cls-7{stroke:currentColor}'
            }
        </style>
      </defs>
      <g id="SVG_Detail_Lines" transform="matrix(0.844233, 0, 0, 0.844233, 60.247921, 69.855316)">
        <g id="Engines" >
          <g id="ENG_1">
            <g id="Strakes">
              <path id="Outer_Strake" className="cls-5" d="m245.67 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"/>
              <path id="Inner_Strake" className="cls-5" d="m276.83 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"/>
            </g>
            <g id="Reverser_Door">
              <path id="Outer_Side" className="cls-5" d="M256.92 295.91c-7.92 0-14.42-.09-19.83-.7"/>
              <path id="Inner_Side" className="cls-5" d="M265.58 295.91c7.92 0 14.42-.09 19.83-.7"/>
            </g>
            <g id="Engine_Mount">
              <g id="Connections">
                <path id="Fan_Connection" className="cls-7" d="m238.37 261.87.37-2.34c14.97-1.51 30.05-1.51 45.02 0l.37 2.34"/>
                <path id="Middle_Connection" className="cls-7" d="M261.25 252.6v5.8"/>
              </g>
              <g id="Mounts">
                <path id="Left_Mount" className="cls-5" d="M255.06 295.9v-37.5"/>
                <path id="Right_Mount" className="cls-5" d="M267.39 295.9v-37.42"/>
                <path id="Front_Mount" className="cls-5" d="M255.06 260.72h12.33"/>
              </g>
            </g>
            <path id="Wing_Mount" className="cls-5" d="m272.64 321.82-7.6 3.97-9.98 9.57"/>
          </g>
          <g id="ENG_2">
            <g id="Strakes-2">
              <path id="Outer_Strake-2" className="cls-5" d="m530.97 265.78-1.36 21.31 6.67.39c-.61-8.46-2.21-16.4-5.3-21.71Z"/>
              <path id="Inner_Strake-2" className="cls-5" d="m499.81 265.78 1.36 21.31-6.67.39c.61-8.46 2.21-16.4 5.3-21.71Z"/>
            </g>
            <g id="Reverser_Door-2">
              <path id="Outer_Side-2" className="cls-5" d="M519.72 295.91c7.92 0 14.42-.09 19.83-.7"/>
              <path id="Inner_Side-2" className="cls-5" d="M511.05 295.91c-7.92 0-14.42-.09-19.83-.7"/>
            </g>
            <g id="Engine_Mount-2">
              <g id="Connections-2">
                <path id="Fan_Connection-2" className="cls-7" d="m538.27 261.87-.37-2.34a224.275 224.275 0 0 0-45.02 0l-.37 2.34"/>
                <path id="Middle_Connection-2" className="cls-7" d="M515.39 252.6v5.8"/>
              </g>
              <g id="Mounts-2">
                <path id="Right_Mount-2" className="cls-5" d="M521.58 295.9v-37.5"/>
                <path id="Left_Mount-2" className="cls-5" d="M509.25 295.9v-37.42"/>
                <path id="Front_Mount-2" className="cls-5" d="M521.58 260.72h-12.33"/>
              </g>
            </g>
            <path id="Wing_Mount-2" className="cls-5" d="m503.99 321.82 7.61 3.97 9.15 8.61"/>
          </g>
        </g>
        <g id="Emergency_Lines" >
          <path id="Left_Emergency_Marks" className="cls-5" d="M346.2 307h-20.55a6.31 6.31 0 0 0-6.31 6.31v84.6"/>
          <path id="Right_Emergency_Marks" className="cls-5" d="M430.18 307h20.55a6.31 6.31 0 0 1 6.31 6.31v84.6"/>
        </g>
        <g id="Wing_Layers" >
          <path id="Left_Wing_Markings" className="cls-5" d="M346.2 292.33 35.36 449.78v11.89l219.86-87.34 64.11-12.21"/>
          <path id="Right_Wing_Markings" className="cls-5" d="m430.19 292.71 312.1 158.12v11.34l-221.12-87.84-64.09-12.21"/>
        </g>
        <g id="Doors">
          <g id="Rear_Doors" >
            <path id="AFT_Left_PS_PSS" className="cls-2" d="M352.06 650.21h5.13c1.55 0 2.74-1.36 2.54-2.9l-1.55-11.75a2.558 2.558 0 0 0-2.54-2.23h-6.16"
            style={{
                                stroke: '#6bbe45',
                                strokeWidth: 2,
                                fill: aftLeftStatus ? '#6bbe45' : 'none',
                                strokeMiterlimit: 10,
                            }}/>
            <path id="AFT_Right_CAT" className="cls-2" d="M424.48 650.21h-5.13c-1.55 0-2.74-1.36-2.54-2.9l1.55-11.75a2.558 2.558 0 0 1 2.54-2.23h6.16"
            style={{
                                stroke: '#6bbe45',
                                strokeWidth: 2,
                                fill: aftRightStatus ? '#6bbe45' : 'none',
                                strokeMiterlimit: 10,
                            }}
                            />
          </g>
          <g id="g-2" transform="matrix(1, 0, 0, 1, 0, 334.92923)" >
            <path id="CTR_LEFT" className="cls-2" d="M430.28 118.06h-9.08a2.67 2.67 0 0 1-2.67-2.67v-11.72a2.67 2.67 0 0 1 2.67-2.67h8.38"/>
            <path id="CTR_RIGHT" className="cls-2" d="M346.2 118.06h9.08a2.67 2.67 0 0 0 2.67-2.67v-11.72a2.67 2.67 0 0 0-2.67-2.67h-8.38" />
          </g>
          <g id="Emergency_Doors" >
            <path id="AFT_Left_EMG" className="cls-2" d="M346.2 337.61h3.14c.95 0 1.72-.77 1.72-1.72v-7.61c0-.95-.77-1.72-1.72-1.72h-3.14"
                                    style={{
                                        stroke: '#6bbe45',
                                        strokeWidth: 2,
                                        fill: 'none',
                                        strokeMiterlimit: 10,
                                    }}/>
            <path id="FWD_Left_EMG" className="cls-2" d="M346.2 319.32h3.14c.95 0 1.72-.77 1.72-1.72v-7.61c0-.95-.77-1.72-1.72-1.72h-3.14"
                                    style={{
                                        stroke: '#6bbe45',
                                        strokeWidth: 2,
                                        fill: 'none',
                                        strokeMiterlimit: 10,
                                    }}/>
            <path id="AFT_Right_EMG" className="cls-2" d="M430.28 337.61h-3.14c-.95 0-1.72-.77-1.72-1.72v-7.61c0-.95.77-1.72 1.72-1.72h3.14"
                                    style={{
                                        stroke: '#6bbe45',
                                        strokeWidth: 2,
                                        fill: 'none',
                                        strokeMiterlimit: 10,
                                    }}/>
            <path id="FWD_Right_EMG" className="cls-2" d="M430.28 319.32h-3.14c-.95 0-1.72-.77-1.72-1.72v-7.61c0-.95.77-1.72 1.72-1.72h3.14"
                                    style={{
                                        stroke: '#6bbe45',
                                        strokeWidth: 2,
                                        fill: 'none',
                                        strokeMiterlimit: 10,
                                    }}/>
          </g>
          <g id="Front_Doors" transform="matrix(1, 0, 0, 1, 0, -39.138138)">
            <path id="FWD_Right_CAT" className="cls-2" d="M430.28 118.06h-9.08a2.67 2.67 0 0 1-2.67-2.67v-11.72a2.67 2.67 0 0 1 2.67-2.67h8.38"
                                    style={{
                                        stroke: '#6bbe45',
                                        strokeWidth: 2,
                                        fill: cabinRightStatus ? '#6bbe45' : 'none',
                                        strokeMiterlimit: 10,
                                    }}/>
            <path id="FWD_Left_PS_PSS" className="cls-2" d="M346.2 118.06h9.08a2.67 2.67 0 0 0 2.67-2.67v-11.72a2.67 2.67 0 0 0-2.67-2.67h-8.38"
                                    style={{
                                        stroke: '#6bbe45',
                                        strokeWidth: 2,
                                        fill: cabinLeftStatus ? '#6bbe45' : 'none',
                                        strokeMiterlimit: 10,
                                    }}/>
          </g>
          <g id="Cargo_Doors" >
            <g id="BLK_Cargo" transform="matrix(1, 0, 0, 1, 0, 35.519077)">
              <path className="cls-2" d="M430.19 553.33h-2"/>
              <path d="M423.87 553.33h-7.83c-1.4 0-2.54 1.14-2.54 2.54v15.25c0 1.4 1.14 2.54 2.54 2.54h9.99"
                                          style={{
                                            strokeDasharray: '0 0 4.32 4.32',
                                            stroke: '#6bbe45',
                                            strokeWidth: 2,
                                            fill: 'none',
                                            strokeMiterlimit: 10,
                                        }}/>
              <path className="cls-2" d="M428.19 573.67h2"/>
            </g>
            <g id="AFT_Cargo" transform="matrix(1, 0, 0, 1, 0, 29.615847)">
              <path className="cls-2" d="M430.18 503h-2"/>
              <path d="M424.16 503h-14.91c-1.98 0-3.58-1.6-3.58-3.58v-27.33c0-1.98 1.6-3.58 3.58-3.58h17.02"
                                          style={{
                                            strokeDasharray: '0 0 4.03 4.03',
                                            stroke: '#6bbe45',
                                            strokeWidth: 2,
                                            fill: 'none',
                                            strokeMiterlimit: 10,
                                        }}/>
              <path className="cls-2" d="M428.28 468.5h2"/>
            </g>
            <g id="FWD_Cargo" transform="matrix(1, 0, 0, 1, 0, -47.323059)">
              <path className="cls-2" d="M430.28 154.67h-2"/>
              <path d="M424.2 154.67h-15.17c-2.13 0-3.86 1.73-3.86 3.86v26.94c0 2.13 1.73 3.86 3.86 3.86h17.21"
                                          style={{
                                            strokeDasharray: '0 0 4.08 4.08',
                                            stroke: '#6bbe45',
                                            strokeWidth: 2,
                                            fill: 'none',
                                            strokeMiterlimit: 10,
                                        }}/>
              <path className="cls-2" d="M428.28 189.33h2"/>
            </g>
          </g>
        </g>
      </g>
      <g id="SVG_Main_Lines"  transform="matrix(0.844233, 0, 0, 0.844233, 60.662922, 75.730957)">
        <g id="Rear_Stablizer" transform="matrix(1, 0, 0, 1, 0, 59.200413)">
          <g id="Right_Fin">
            <path id="Right_Elevator" className="cls-1" d="m409.78 769.69 3.03-21.36 109.98 38.56"/>
            <path id="Right_Fin_Outline" className="cls-4" d="M405.01 769.34c3.31-.08 7.06.74 8.21 1.02 3.98.98 109.58 24.53 109.58 24.53v-12.35c0-6.22-1.16-14.42-6.88-17.99.08.17-86.62-55.2-86.62-55.2-5.14-3.32-10.2-6.8-12.7-16.62"/>
          </g>
          <g id="Left_Fin">
            <path id="Left_Elevator" className="cls-1" d="m366.7 769.69-3.03-21.36-109.98 38.56"/>
            <path id="Left_Fin_Outline" className="cls-4" d="M371.47 769.34c-3.31-.08-7.06.74-8.21 1.02-3.98.98-109.58 24.53-109.58 24.53v-12.35c0-6.22 1.16-14.42 6.88-17.99-.08.17 86.62-55.2 86.62-55.2 5.14-3.32 10.2-6.8 12.7-16.62"/>
          </g>
          <path id="Rudder" className="cls-4" d="M388.5 796.17s-6-61-6-87.33 2.5-75.5 6-75.5h.07c3.5 0 5.93 49.17 5.93 75.5s-6 87.33-6 87.33"/>
        </g>
        <g id="Wings">
          <g id="Right_Wing">
            <g id="Right_Slats">
              <path id="Inner_Slats" className="cls-1" d="M436.35 283.52v10.37L500.48 327l4.56-7.85"/>
              <g id="Main_Slats">
                <path id="Outer_Divider" className="cls-1" d="m692.06 423.46 3.29-5.59"/>
                <path id="Middle_Divider" className="cls-1" d="m637.09 395.69 3.77-6.09"/>
                <path id="Inner_Divider" className="cls-1" d="m582.46 368.11 3.63-6.92"/>
                <path id="Main_Slats_Outline" className="cls-1" d="m740.33 441.28-3.3 4.89-216.28-109.23v-9.72"/>
              </g>
            </g>
            <g id="Right_Wing_Flap_Fairings">
              <path id="Outer" className="cls-1" d="M645.34 447.05c-.41 8.89 2.83 18.13 2.83 18.13s2.62-8.94 2.87-16.34"/>
              <path id="Middle" className="cls-1" d="M565.52 422.12c-.15 6.84 3.02 17.3 3.02 17.3s3.04-10.89 3.24-15.35"/>
              <path id="Inner" className="cls-1" d="M490.43 409.89c0 6.63 3.2 15.28 3.2 15.28s2.71-9.28 2.71-15.28"/>
            </g>
            <g id="Right_Flaps">
              <path id="Flap_Divider" className="cls-1" d="M527.05 410.11v-11.35"/>
              <path id="Flap_Outline" className="cls-1" d="M430.28 397.92h94.45l156.08 56.58v3.63"/>
            </g>
            <g id="Right_Spoilers">
              <path id="Inner_Spoiler" className="cls-1" d="M494.37 397.92V384h30.34l.08 13.92"/>
              <g id="Main_Spoilers">
                <path id="Outer_Divider-2" className="cls-1" d="m639.29 439.42 4.96-13.81"/>
                <path id="Middle_Divider-2" className="cls-1" d="m606.89 427.68 5.25-13.7"/>
                <path id="Inner_Divider-2" className="cls-1" d="m570.46 414.47 5.34-13.65"/>
                <path id="Main_Spoiler_Outline" className="cls-1" d="m534.5 401.44 6.37-13.27 135.75 49.16-4.68 13.93"/>
              </g>
            </g>
            <path id="Right_Aileron" className="cls-1" d="M742.29 476.96v-13.35l-56.26-20.22-1.39 2.78v12.73"/>
            <g id="ENG_2-2">
              <path id="Engine_Mount-3" className="cls-1" d="M511.05 321.93V274.5c0-5.5 1.29-10.5 4.29-10.5h.05c3 0 4.33 5 4.33 10.5v51.92"/>
              <path id="Engine" className="cls-4" d="M519.72 320.06h15.53c.62 0 1.15-.43 1.26-1.04.72-3.83 3.13-17.76 3.13-34.18 0-19.33-1.92-31.04-3-32.5-1.67-2.25-4.6-3.94-21.18-3.94h-.15c-16.58 0-19.5 1.69-21.17 3.94-1.08 1.46-3 13.17-3 32.5 0 11.27 1.13 21.38 2.08 27.84"/>
              <path id="Exhaust" className="cls-1" d="M530.05 320.06s-1.97 8.42-3.34 10"/>
              <path id="Engine_Inner_end" className="cls-4" d="M507.45 320.06h3.6"/>
              <path id="Cowling" className="cls-1" d="M493.6 255.65c0-4.06 43.58-4.06 43.58 0"/>
            </g>
            <path id="Right_Wing_Outliine" className="cls-4" d="M430.28 409.89h96.07l225.04 70.28s3.99 14.18 5.65 14.18-3.56-29.35-3.74-30.59c0 0-2.65-17.49-13.84-23.29S435.68 282.9 435.68 282.9c-2.57-1.57-5.39-30-5.39-30"/>
          </g>
          <g id="Left_Wing">
            <g id="Left_Slats">
              <path id="Inner_Slats-2" className="cls-1" d="M339.62 283.52v10.37L275.5 327l-4.57-7.85"/>
              <g id="Main_Slats-2">
                <path id="Outer_Divider-3" className="cls-1" d="m83.92 423.46-3.3-5.59"/>
                <path id="Middle_Divider-3" className="cls-1" d="m138.89 395.69-3.78-6.09"/>
                <path id="Inner_Divider-3" className="cls-1" d="m193.51 368.11-3.62-6.92"/>
                <path id="Main_Slats_Outline-2" className="cls-1" d="m35.65 441.28 3.29 4.89 216.28-109.23v-9.72"/>
              </g>
            </g>
            <g id="Left_Wing_Flap_Fairings">
              <path id="Outer-2" className="cls-1" d="M131.14 447.05c.41 8.89-2.83 18.13-2.83 18.13s-2.62-8.94-2.87-16.34"/>
              <path id="Middle-2" className="cls-1" d="M210.96 422.12c.15 6.84-3.02 17.3-3.02 17.3s-3.04-10.89-3.24-15.35"/>
              <path id="Inner-2" className="cls-1" d="M286.05 409.89c0 6.63-3.2 15.28-3.2 15.28s-2.71-9.28-2.71-15.28"/>
            </g>
            <g id="Left_Flaps">
              <path id="Flap_Divider-2" className="cls-1" d="M249.43 410.11v-11.35"/>
              <path id="Flap_Outline-2" className="cls-1" d="M346.2 397.92h-94.45L95.67 454.5v3.63"/>
            </g>
            <g id="Left_Spoilers">
              <path id="Inner_Spoiler-2" className="cls-1" d="M282.17 397.92V384h-30.34l-.08 13.92"/>
              <g id="Main_Spoilers-2">
                <path id="Outer_Divider-4" className="cls-1" d="m137.25 439.42-4.96-13.81"/>
                <path id="Middle_Divider-4" className="cls-1" d="m169.65 427.68-5.25-13.7"/>
                <path id="Inner_Divider-4" className="cls-1" d="m206.08 414.47-5.34-13.65"/>
                <path id="Main_Spoilers_Outline" className="cls-1" d="m242.04 401.44-6.37-13.27-135.75 49.16 4.68 13.93"/>
              </g>
            </g>
            <path id="Left_Aileron" className="cls-1" d="M35.36 476.96v-13.35l56.25-20.22 1.39 2.78v12.73"/>
            <g id="ENG_1-2">
              <path id="Engine_Mount-4" className="cls-1" d="M265.58 321.93V274.5c0-5.5-1.29-10.5-4.29-10.5h-.05c-3 0-4.33 5-4.33 10.5v51.92"/>
              <path id="Engine-2" className="cls-4" d="M256.92 320.06h-15.53c-.62 0-1.15-.43-1.26-1.04-.72-3.83-3.13-17.76-3.13-34.18 0-19.33 1.92-31.04 3-32.5 1.67-2.25 4.6-3.94 21.18-3.94h.15c16.58 0 19.5 1.69 21.17 3.94 1.08 1.46 3 13.17 3 32.5 0 11.27-1.13 21.38-2.08 27.84"/>
              <path id="Exhaust-2" className="cls-1" d="M246.58 320.06s1.97 8.42 3.34 10"/>
              <path id="Engine_Inner_end-2" className="cls-4" d="M269.19 320.06h-3.61"/>
              <path id="Cowling-2" className="cls-1" d="M239.46 255.65c0-4.06 43.58-4.06 43.58 0"/>
            </g>
            <path id="Left_Wing_Outline" className="cls-4" d="M346.2 409.89h-96.07L25.09 480.17s-3.99 14.18-5.65 14.18S23 465 23.18 463.76c0 0 2.65-17.49 13.84-23.29C48.21 434.67 340.8 282.9 340.8 282.9c2.57-1.57 5.39-30 5.39-30"/>
          </g>
        </g>
        <g id="Fuselage" >
          <path id="APU_Exhaust" className="cls-1" d="M 384.38 868.968 L 384.97 868.888 C 387.31 868.588 389.68 868.608 392.01 868.948 L 392.09 868.948" />
          <g id="Cockpit_Windows" transform="matrix(1, 0, 0, 1, 0, -59.182766)" >
            <g id="Cockpit_Windows_Left">
              <path className="cls-1" d="m373.46 47.17 12.18-6.93c.37-.21.6-.6.6-1.02v-7c0-.92-1.04-1.47-1.8-.95l-14.67 10c-.6.41-.75 1.24-.32 1.83l2.72 3.79a1 1 0 0 0 1.3.28ZM367.17 44.57l2.08 2.55c.21.26.33.58.33.92v2.37c0 .31-.08.61-.24.88l-3.39 5.74c-.24.4-.67.65-1.14.65h-3.74c-.63 0-1.14-.51-1.14-1.14v-.49c0-.29.07-.58.21-.84l5.53-10.49a.906.906 0 0 1 1.51-.15ZM364.33 61.34l-2.56 6.51c-.07.18-.18.34-.31.48l-3.05 3.5c-.54.62-1.32.98-2.15.98h-1.17c-.9 0-1.5-.91-1.16-1.74L358.15 61c.19-.43.61-.71 1.08-.71h4.37c.54 0 .92.55.72 1.06Z"/>
            </g>
            <g id="Cockpit_Windows_Right">
              <path className="cls-1" d="m402.93 47.17-12.18-6.93c-.37-.21-.6-.6-.6-1.02v-7c0-.92 1.04-1.47 1.8-.95l14.67 10c.6.41.75 1.24.32 1.83l-2.72 3.79a1 1 0 0 1-1.3.28ZM409.22 44.57l-2.08 2.55c-.21.26-.33.58-.33.92v2.37c0 .31.08.61.24.88l3.39 5.74c.24.4.67.65 1.14.65h3.74c.63 0 1.14-.51 1.14-1.14v-.49c0-.29-.07-.58-.21-.84l-5.53-10.49a.906.906 0 0 0-1.51-.15ZM412.06 61.34l2.56 6.51c.07.18.18.34.31.48l3.05 3.5c.54.62 1.32.98 2.15.98h1.17c.9 0 1.5-.91 1.16-1.74L418.24 61c-.19-.43-.61-.71-1.08-.71h-4.37c-.54 0-.92.55-.72 1.06Z"/>
            </g>
          </g>
          <path id="Fuselage_Outline" className="cls-4" d="M 388.23 -56.187 C 392.01 -56.187 396.69 -52.369 401.6 -43.86 C 413.48 -23.275 420 -1.415 425.08 23.113 C 429.28 43.387 430.27 62.511 430.27 77.506 L 430.27 627.986 C 430.27 667.706 412.28 759.081 412.28 759.081 L 408.55 781.194 C 408.45 781.781 408.39 782.379 408.38 782.988 L 407.77 801.709 C 407.19 813.002 405.17 824.869 401.76 839.151 C 398.64 852.226 395.86 866.888 390.67 873.765 C 390.552 873.915 390.386 874.002 390.21 874.006 L 386.26 874.006 C 386.08 874.006 385.91 873.926 385.8 873.765 C 380.61 866.888 377.83 852.226 374.71 839.151 C 371.3 824.869 369.28 813.002 368.7 801.709 L 368.09 782.988 C 368.078 782.386 368.021 781.785 367.92 781.194 L 364.19 759.081 C 364.19 759.081 346.2 667.706 346.2 627.986 L 346.2 77.506 C 346.2 62.511 347.19 43.387 351.39 23.113 C 356.47 -1.415 362.99 -23.275 374.87 -43.86 C 379.78 -52.369 384.38 -56.187 388.16 -56.187 L 388.22 -56.187 L 388.23 -56.187 Z" />
        </g>
      </g>
    </svg>
    );
