import { Pane } from 'evergreen-ui';

const PaneCustom = ({ children, ...props }) => (
  <Pane {...props}>{children}</Pane>
);

export { PaneCustom as Pane }; // eslint-disable-line import/prefer-default-export
