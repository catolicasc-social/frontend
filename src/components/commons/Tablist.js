import { Tablist, SidebarTab, Icon } from 'evergreen-ui';
import { withRouter } from 'next/router';
import Link from 'next/link';

import { Pane } from './Pane';
import { Heading } from './Heading';

const TabTitle = ({ children, title, icon }) => (
  <Pane marginBottom="30px">
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      marginBottom={10}
    >
      <Icon icon={icon} size={14} color="#95a3b1" marginRight={10} />
      <Heading
        size={300}
        fontWeight="600"
        textTransform="uppercase"
        color="#234361"
      >
        {title}
      </Heading>
    </Pane>
    {children}
  </Pane>
);
const Tab = withRouter(({ router, href, text }) => (
  <SidebarTab
    key={href}
    id={href}
    isSelected={router.pathname === href}
    aria-controls={`panel-${href}`}
    fontSize={14}
    color="muted"
    position="relative"
  >
    <Link prefetch href={href}>
      <a>{text}</a>
    </Link>

    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration: none;
          display: block;
          padding-left: 8px;
          padding-top: 2px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      `}
    </style>
  </SidebarTab>
));

const TablistDefault = ({ items = [] }) => (
  <Tablist
    height="calc(100vh - 50px)"
    flexBasis={240}
    padding={20}
    backgroundColor="#fff"
    borderRight="1px solid #EDF0F2"
  >
    {items.map(item => (
      <TabTitle key={item.title} title={item.title} icon={item.icon}>
        {item.tabs.map(tab => (
          <Tab key={tab.name} text={tab.name} href={tab.href} />
        ))}
      </TabTitle>
    ))}
  </Tablist>
);

// eslint-disable-next-line import/prefer-default-export
export { TablistDefault as Tablist };
