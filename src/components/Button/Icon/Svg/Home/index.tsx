import { SVGProps } from 'react';

import { svgClassName } from '../style';

function HomeSvg({ className, stroke, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="3.0595193mm"
      height="2.7819281mm"
      viewBox="0 0 3.0595193 2.7819281"
      version="1.1"
      id="svg1"
      className={svgClassName}
      {...rest}
    >
      <g id="layer2" transform="translate(-84.244555,-130.7521)">
        <g id="g6" transform="translate(84.244548,130.7521)">
          <g id="layer2-8" transform="translate(-120.60312,-92.770002)">
            <path
              id="path1"
              className={className}
              style={{
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
              d="m 122.01116,93.483183 -0.72244,0.419096 c -0.0837,0.06227 -0.13653,0.12328 -0.13953,0.233577 v 1.044381 c -0.002,0.101648 0.0464,0.191822 0.15762,0.221692 l 0.34055,-0.0041 c 0.0912,-0.0019 0.19158,-0.08491 0.18758,-0.24443 l -0.002,-0.679028 0.29146,5.17e-4 h 0.045 l 0.29145,-5.17e-4 -0.002,0.679028 c -0.004,0.159517 0.0964,0.242509 0.18759,0.24443 l 0.34055,0.0041 c 0.1112,-0.02987 0.15949,-0.120044 0.15761,-0.221692 v -1.044381 c -0.003,-0.110297 -0.0558,-0.171306 -0.13953,-0.233577 l -0.72243,-0.419096 c -0.11228,-0.06669 -0.16192,-0.06528 -0.27182,0 z"
            />
            <path
              id="path1-2"
              className={className}
              style={{
                display: 'inline',
                fill: 'none',
                stroke: stroke,
                strokeWidth: 0.3,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1
              }}
              d="m 123.51264,93.657827 -1.17016,-0.686035 c -0.14213,-0.07556 -0.28537,-0.06429 -0.4041,-0.0058 l -1.18526,0.694867 m 2.2686,-0.738457 0.003,0.319878 z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export { HomeSvg };
