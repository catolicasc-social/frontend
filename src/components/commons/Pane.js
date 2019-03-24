import { Pane } from 'evergreen-ui';

const PaneCustom = ({ height, width }) => (
  <Pane height={height} width={width} />
);

export { PaneCustom as Pane }; // eslint-disable-line import/prefer-default-export
