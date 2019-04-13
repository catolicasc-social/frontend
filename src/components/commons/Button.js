import { Button } from 'evergreen-ui';

const ButtonCustom = ({ children, appearance, intent, isLoading, onClick }) => (
  <Button {...{ isLoading, intent, appearance, onClick }}>{children}</Button>
);

// eslint-disable-next-line import/prefer-default-export
export { ButtonCustom as Button };
