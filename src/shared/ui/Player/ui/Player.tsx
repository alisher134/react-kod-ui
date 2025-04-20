import KinescopePlayer, { PlayerPropsTypes } from '@kinescope/react-kinescope-player';
import { forwardRef } from 'react';

export const Player = forwardRef<KinescopePlayer, PlayerPropsTypes>((props, ref) => {
  return <KinescopePlayer ref={ref} {...props} />;
});
