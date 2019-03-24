import { Alert } from 'evergreen-ui';

const AlertDefault = ({ title, intent, marginBottom }) => (
  <Alert intent={intent} title={title} marginBottom={marginBottom} />
);

// eslint-disable-next-line import/prefer-default-export
export { AlertDefault as Alert };
