import React from 'react';

type EnglishFlagIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export const EnglishFlagIcon: React.FC<EnglishFlagIconProps> = ({ size = 25, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 480"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    {renderUSFlag()}
  </svg>
);

export default EnglishFlagIcon;

function renderUSFlag(): React.ReactElement {
  const width = 640;
  const height = 480;
  const stripeHeight = height / 13;
  const unionHeight = stripeHeight * 7;
  const unionWidth = height * 0.76;

  return (
    <g>
      <rect width={width} height={height} fill="#fff" />
      {renderStripes(width, stripeHeight)}
      <rect x={0} y={0} width={unionWidth} height={unionHeight} fill="#192f5d" />
      <g fill="#fff">{renderStarsInUnion(unionWidth, unionHeight)}</g>
    </g>
  );
}

function renderStarsInUnion(unionWidth: number, unionHeight: number): React.ReactElement[] {
  const elements: React.ReactElement[] = [];
  const rows = 9;
  const spacingX = unionWidth / 12;
  const spacingY = unionHeight / 10;
  const starSize = Math.min(spacingX, spacingY) * 0.6;

  for (let row = 0; row < rows; row += 1) {
    const cols = row % 2 === 0 ? 6 : 5;
    const xOffset = row % 2 === 0 ? spacingX : spacingX * 2;
    const y = spacingY * (row + 1);
    for (let col = 0; col < cols; col += 1) {
      const x = xOffset + col * spacingX * 2;
      elements.push(
        <polygon key={`s-${row}-${col}`} points={createStarPoints(x, y, starSize / 2, starSize)} />
      );
    }
  }
  return elements;
}

function renderStripes(totalWidth: number, stripeHeight: number): React.ReactElement[] {
  const stripes: React.ReactElement[] = [];
  for (let i = 0; i < 13; i += 1) {
    if (i % 2 === 0) {
      stripes.push(
        <rect
          key={`r-${i}`}
          x={0}
          y={i * stripeHeight}
          width={totalWidth}
          height={stripeHeight}
          fill="#bd3d44"
        />
      );
    }
  }
  return stripes;
}

function createStarPoints(cx: number, cy: number, innerR: number, outerR: number): string {
  const angles: number[] = [];
  for (let i = 0; i < 10; i += 1) {
    const angle = (-90 + i * 36) * (Math.PI / 180);
    angles.push(angle);
  }
  const coords: string[] = angles.map((angle, idx) => {
    const r = idx % 2 === 0 ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x},${y}`;
  });
  return coords.join(' ');
}
