import { SVGProps } from 'react';

import { FileSvg, HomeSvg, GallerySvg } from './Svg';

export type Icons = 'home' | 'file' | 'gallery';

type IconComponentObj = Record<Icons, JSX.Element>;

type IconProps = {
  iconName: Icons;
} & SVGProps<SVGSVGElement>;

function Icon({ iconName, ...rest }: IconProps) {
  const components: IconComponentObj = {
    file: <FileSvg {...rest} />,
    gallery: <GallerySvg {...rest} />,
    home: <HomeSvg {...rest} />
  };

  return components[iconName] ?? null;
}

export { Icon };
