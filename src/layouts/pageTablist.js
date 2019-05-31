import Page from './page';
import ContentTablist from './contentTablist';

const ContainerProducts = ({ children, title, items }) => {
  return (
    <Page title={title} padding={0}>
      <ContentTablist items={items}>{children}</ContentTablist>
    </Page>
  );
};

export default ContainerProducts;
