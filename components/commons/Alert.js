import { Alert } from 'evergreen-ui';

const AlertDefault = ({ children, ...props }) => (
  <Alert {...props}>{children}</Alert>
);

// eslint-disable-next-line import/prefer-default-export
export { AlertDefault as Alert };
