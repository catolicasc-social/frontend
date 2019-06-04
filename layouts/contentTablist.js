import { Pane } from '../components/commons/Pane';
import { Tablist } from '../components/commons/Tablist';

const ContentTablist = ({ children, items = [] }) => (
  <Pane display="flex" flex="1 1 auto">
    <Tablist items={items} />
    <Pane display="flex" flex="1 1 auto" background="#F9F9FB" padding={20}>
      {children}
    </Pane>
  </Pane>
);

export default ContentTablist;
