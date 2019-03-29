import { Button } from 'evergreen-ui';

const ButtonCustom = ({ children, appearance, intent }) => (
  <Button appearance={appearance} intent={intent}>
    {children}
  </Button>
);

// eslint-disable-next-line import/prefer-default-export
export { ButtonCustom as Button };
