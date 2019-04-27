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

    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          color: #fff;
        }
      `}
    </style>
  </Pane>
);

export default Content;
