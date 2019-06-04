import Content from './content';

const Page = ({ children, title, padding = 20 }) => (
  <Content title={title} padding={padding}>
    {children}
  </Content>
);

export default Page;
