/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-wrap-multilines */
import { Spinner } from 'evergreen-ui';

const SpinnerCustom = ({ size, marginX, marginY, delay, children }) => (
  <Spinner marginX={marginX} marginY={marginY} size={size} delay={delay}>
    {children}
  </Spinner>
);

export { SpinnerCustom as Spinner };
