import { IconButton } from 'evergreen-ui';

import ContainerProducts from '../../layouts/products';
import Table from '../../components/commons/Table';

const getProducts = () => {
  const products = [];
  const header = { id: 'ID', name: 'Nome', category: 'Categoria' };

  for (let i = 0; i < 15; i += 1) {
    products.push({
      id: i,
      name: `teste${i}`,
      category: `categoria${i}`
    });
  }

  return { products, header };
};

const renderHeaderOptions = () => <IconButton flex={1} icon="plus" />;

const Products = () => {
  const { products, header } = getProducts();

  return (
    <ContainerProducts>
      <Table
        items={products}
        header={header}
        headerOptions={renderHeaderOptions()}
        tableHeight="calc(100vh - 189px)"
      />
    </ContainerProducts>
  );
};

export default Products;
