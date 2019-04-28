import { Button } from 'evergreen-ui';

const ButtonCustom = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

// eslint-disable-next-line import/prefer-default-export
export { ButtonCustom as Button };
