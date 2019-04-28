import { Heading } from 'evergreen-ui';

const HeadingCustom = ({ children, ...props }) => (
  <Heading {...props}>{children}</Heading>
);

// eslint-disable-next-line import/prefer-default-export
export { HeadingCustom as Heading };
