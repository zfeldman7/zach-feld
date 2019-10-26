import React, { FC, ComponentType } from 'react';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export const Python: ComponentType<SvgIconProps> = (props) => (
    <SvgIcon  
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="110.421"
    height="109.846"
    version="1"
    {...props}>
      <defs>
        <linearGradient id="a">
          <stop offset="0" stopColor="#ffe052" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#ffc331" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient
          id="d"
          x1="89.137"
          x2="147.777"
          y1="111.921"
          y2="168.101"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        ></linearGradient>
        <linearGradient id="b">
          <stop offset="0" stopColor="#387eb8" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#366994" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="55.549"
          x2="110.149"
          y1="77.07"
          y2="131.853"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#b"
        ></linearGradient>
      </defs>
      <g
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        markerEnd="none"
        markerMid="none"
        markerStart="none"
        color="#000"
        visibility="visible"
      >
        <path
          fill="url(#c)"
          d="M99.75 67.469c-28.032 0-26.281 12.156-26.281 12.156l.031 12.594h26.75V96H62.875s-17.938-2.034-17.938 26.25 15.657 27.281 15.657 27.281h9.343v-13.125s-.503-15.656 15.407-15.656h26.531s14.906.241 14.906-14.406V82.125s2.263-14.656-27.031-14.656zM85 75.938a4.808 4.808 0 014.813 4.812A4.808 4.808 0 0185 85.563a4.808 4.808 0 01-4.813-4.813A4.808 4.808 0 0185 75.937z"
          display="inline"
          opacity="1"
          overflow="visible"
          transform="translate(-473.36 -251.725) translate(428.423 184.256)"
          style={{ marker: "none" }}
        ></path>
        <path
          fill="url(#d)"
          style={{ marker: "none" }}
          d="M100.546 177.315c28.032 0 26.281-12.156 26.281-12.156l-.03-12.594h-26.75v-3.781h37.374s17.938 2.034 17.938-26.25c0-28.285-15.657-27.282-15.657-27.282h-9.343v13.125s.503 15.657-15.407 15.657h-26.53s-14.907-.241-14.907 14.406v24.219s-2.263 14.656 27.031 14.656zm14.75-8.469a4.808 4.808 0 01-4.812-4.812 4.808 4.808 0 014.812-4.813 4.808 4.808 0 014.813 4.813 4.808 4.808 0 01-4.813 4.812z"
          display="inline"
          opacity="1"
          overflow="visible"
          transform="translate(-473.36 -251.725) translate(428.423 184.256)"
        ></path>
      </g>
     </SvgIcon>
)
