import React from 'react';

type SpanishFlagIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export const SpanishFlagIcon: React.FC<SpanishFlagIconProps> = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 480"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect width="640" height="480" fill="#aa151b" />
    <rect y="120" width="640" height="240" fill="#f1bf00" />
    <g transform="translate(200 200)">
      <rect x="0" y="0" width="48" height="64" rx="4" fill="#c60b1e" />
      <rect x="8" y="8" width="32" height="48" rx="3" fill="#ffc400" />
      <rect x="20" y="20" width="8" height="24" fill="#c60b1e" />
    </g>
  </svg>
);
