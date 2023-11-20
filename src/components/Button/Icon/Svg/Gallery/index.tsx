import { SVGProps } from 'react';

import { svgClassName } from '../style';

function GallerySvg({
  className,
  stroke,
  fill = 'none',
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="3.2042456mm"
      height="3.1832359mm"
      viewBox="0 0 3.2042456 3.1832359"
      version="1.1"
      id="svg1"
      className={svgClassName}
      {...rest}
    >
      <g id="layer2" transform="translate(-119.55997,-142.26382)">
        <path
          id="rect6-7-5"
          className={className}
          style={{
            fill: fill,
            fillOpacity: 1,
            stroke: stroke,
            strokeWidth: 0.3,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal'
          }}
          d="m 122.11399,142.91376 v 1.60817 c 0,0.15228 -0.11717,0.27492 -0.26251,0.27492 h -1.64125 v 0.22531 c 0,0.15228 0.11666,0.27491 0.262,0.27491 h 1.87947 c 0.14535,0 0.26252,-0.12263 0.26252,-0.27491 v -1.83348 c 0,-0.15229 -0.11717,-0.27492 -0.26252,-0.27492 z"
        />
        <rect
          id="rect6"
          className={className}
          style={{
            opacity: 1,
            fill: fill,
            fillOpacity: 1,
            stroke: stroke,
            strokeWidth: 0.3,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal'
          }}
          width="2.4040644"
          height="2.3828781"
          x="119.70998"
          y="142.41383"
          rx="0.26235673"
          ry="0.27487615"
        />
        <path
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
          d="m 119.78503,144.70516 0.47195,-0.7059 c 0.0488,-0.0902 0.1293,-0.11127 0.18761,-0.0647 l 0.41409,0.23592 0.4224,-0.4825 c 0.0835,-0.1186 0.19295,-0.12831 0.26888,-0.0617 l 0.55156,0.47042"
          id="path6"
        />
        <circle
          className={className}
          style={{
            opacity: 1,
            fill: stroke,
            fillOpacity: 1,
            stroke: stroke,
            strokeWidth: 0,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal'
          }}
          id="path7"
          cx="120.38857"
          cy="143.05318"
          r="0.1953125"
        />
      </g>
    </svg>
  );
}

export { GallerySvg };
