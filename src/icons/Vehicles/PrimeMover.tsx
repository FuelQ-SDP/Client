import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../../Colors';

export const PrimeMover = ({
  size = 24,
  color = Colors.Secondary.GreyDark,
  ...rest
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 9"
    {...rest}>
    <Path
      d="M21.688 5.932a1.282 1.282 0 1 0-.001 2.563 1.282 1.282 0 0 0 .001-2.563Zm0 1.843a.564.564 0 1 1 0-1.123.564.564 0 0 1 0 1.123Zm-2.993-1.843a1.282 1.282 0 1 0 0 2.564 1.282 1.282 0 0 0 0-2.564Zm0 1.843a.563.563 0 0 1 0-1.125.561.561 0 1 1 0 1.125Zm-3.033-1.843a1.282 1.282 0 1 0-.002 2.563 1.282 1.282 0 0 0 .002-2.563Zm0 1.843a.565.565 0 0 1-.566-.563.565.565 0 0 1 1.128 0 .562.562 0 0 1-.562.563ZM2.657 1.402S3.421.709 4.804.085v1.317H2.657ZM4.957 0v1.692h-.108v5.225h9.263c.158-.72.8-1.262 1.563-1.262.706 0 1.303.456 1.52 1.087a1.605 1.605 0 0 1 1.517-1.087c.683 0 1.265.428 1.497 1.032a1.602 1.602 0 0 1 3.063.23h1.318V5.34H25V0H4.957Zm19.27 6.139h-.2V5.34h.2v.798ZM.702 6.747a1.118 1.118 0 0 0-.006.512H0v-.512h.702Zm3.467 0h.537v.511h-.528c.01-.075.018-.153.018-.232 0-.096-.012-.19-.027-.279Zm9.924.279a1.8 1.8 0 0 0-.018.233c0 .049.004.094.007.143H4.85v-.376h9.243Zm9.197 0h1.441V7.4h-1.43c.004-.048.008-.094.008-.142 0-.079-.008-.157-.019-.233ZM.046 4.003V6.605h.78c.19-.741.859-1.29 1.659-1.29.798 0 1.466.547 1.657 1.29h.575V1.684H1.105L.046 4.004Zm4.275-1.945v1.219H2.928l-1.031.867H.519l.766-2.086h3.036ZM2.49 5.838a1.374 1.374 0 1 0-.003 2.749 1.374 1.374 0 0 0 .003-2.748Zm0 1.978a.604.604 0 1 1 0-1.208.604.604 0 0 1 0 1.208Z"
      fill={color}
    />
  </Svg>
);
