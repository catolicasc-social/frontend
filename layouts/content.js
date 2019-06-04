import { Pane } from 'evergreen-ui';

import Menu from '../components/commons/Menu';
import Header from '../components/commons/Header';

const Content = ({ children, title, padding = 20 }) => (
  <Pane display="flex" flexGrow={1} width="100%" minHeight="100%">
    <Menu />
    <Pane background="#F9F9FB" flex="1">
      <Header title={title} />
      <Pane padding={padding}>{children}</Pane>
    </Pane>
  </Pane>
);

export default Content;
