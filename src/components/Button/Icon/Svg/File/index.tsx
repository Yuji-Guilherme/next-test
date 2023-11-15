import { SVGProps } from 'react';

import { svgClassName } from '../style';

function FileSvg({
  className,
  stroke,
  fill = 'none',
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="2.0917246mm"
      height="2.6288366mm"
      viewBox="0 0 2.0917246 2.6288366"
      version="1.1"
      id="svg1"
      className={svgClassName}
      {...rest}
    >
      <g id="layer2" transform="translate(-87.769083,-130.15648)">
        <path
          id="path6"
          className={className}
          style={{
            opacity: 1,
            fill: 'none',
            fillOpacity: 1,
            stroke: stroke,
            strokeWidth: 0.3,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal'
          }}
          d="m 89.02348,130.31115 0.663251,0.66772"
        />
        <path
          id="rect4"
          className={className}
          style={{
            display: 'inline',
            opacity: 1,
            fill: fill,
            stroke: stroke,
            strokeWidth: 0.284446,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }}
          d="m 88.116706,130.2987 0.870483,0.003 0.0014,0.70666 0.728797,-0.005 0.0012,1.43288 c 1.05e-4,0.1146 -0.09145,0.20685 -0.205054,0.20685 h -1.396958 c -0.113599,0 -0.205052,-0.0922 -0.205052,-0.20685 v -1.92998 c -0.0047,-0.18557 0.06293,-0.2074 0.205097,-0.20696 z"
        />
      </g>
    </svg>
  );
}

export { FileSvg };
