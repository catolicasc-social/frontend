import { IconButton } from 'evergreen-ui';
import Page from '../layouts/page';
import Table from '../components/commons/Table';

const Products = () => {
  const products = [];
  for (let i = 0; i < 15; i += 1) {
    products.push({
      id: i,
      name: `teste${i}`,
      category: `categoria${i}`
    });
  }

  const header = { id: 'ID', name: 'Nome', category: 'Categoria' };

  function renderHeader2() {
    return <IconButton flex={1} icon="plus" />;
  }

  return (
    <Page title="Produto">
      <Table
        items={products}
        header={header}
        tableHeight="calc(100vh - 225px)"
        header2={renderHeader2()}
      />
    </Page>
  );
};

export default Products;
