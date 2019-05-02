import Content from './content';

const Page = ({ children, title }) => (
  <Content title={title}>{children}</Content>
);

export default Page;
