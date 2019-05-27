import { IconButton } from 'evergreen-ui';

import Page from '../layouts/page';
import ContentTablist from '../layouts/contentTablist';
import Table from '../components/commons/Table';

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

const getTablist = () => {
  return [
    {
      title: 'Produto',
      icon: 'projects',
      tabs: [{ name: 'Produtos', href: 'itens' }]
    },
    {
      title: 'Categoria',
      icon: 'tag',
      tabs: [
        { name: 'Categorias', href: 'itens' },
        { name: 'Marcas', href: 'itens' }
      ]
    },
    {
      title: 'Estoque',
      icon: 'layers',
      tabs: [
        { name: 'Estoques', href: 'itens' },
        { name: 'Validade de produtos', href: 'itens' }
      ]
    },
    {
      title: 'Movimentação',
      icon: 'changes',
      tabs: [
        { name: 'Entrada', href: 'itens' },
        { name: 'Saída', href: 'itens' }
      ]
    }
  ];
};

const Products = () => {
  const { products, header } = getProducts();

  return (
    <Page title="Produto" padding={0}>
      <ContentTablist items={getTablist()}>
        <Table
          items={products}
          header={header}
          headerOptions={renderHeaderOptions()}
          tableHeight="calc(100vh - 189px)"
        />
      </ContentTablist>
    </Page>
  );
};

export default Products;
