import { Text } from 'evergreen-ui';

const TextCustom = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

// eslint-disable-next-line import/prefer-default-export
export { TextCustom as Text };
