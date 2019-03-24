import { Heading } from 'evergreen-ui';

const HeadingCustom = ({ children, size }) => (
  <Heading size={size}>{children}</Heading>
);

// eslint-disable-next-line import/prefer-default-export
export { HeadingCustom as Heading };
