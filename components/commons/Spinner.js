import { Spinner } from 'evergreen-ui';

const SpinnerCustom = ({ children, ...props }) => (
  <Spinner {...props}>{children}</Spinner>
);

// eslint-disable-next-line import/prefer-default-export
export { SpinnerCustom as Spinner };
