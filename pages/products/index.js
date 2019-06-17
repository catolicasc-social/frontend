import { useState } from 'react';
import { IconButton } from 'evergreen-ui';

import ContainerProducts from '../../layouts/products';
import Table from '../../components/commons/Table';
import Dialog from '../../components/commons/Dialog';

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

const renderHeaderOptions = onClick => (
  <IconButton flex={1} icon="plus" onClick={onClick} />
);

const Products = () => {
  const [isShownDialog, setIsShownDialog] = useState(false);
  const { products, header } = getProducts();

  const handleDialog = () => setIsShownDialog(!isShownDialog);

  return (
    <ContainerProducts>
      <Table
        items={products}
        header={header}
        headerOptions={renderHeaderOptions(handleDialog)}
        searchProperty="name"
        tableHeight="calc(100vh - 189px)"
      />
      <Dialog
        title="Adicionar produto"
        confirmLabel="Confirmar"
        cancelLabel="Cancelar"
        preventBodyScrolling
        isShown={isShownDialog}
        onCloseComplete={handleDialog}
      >
        teste
      </Dialog>
    </ContainerProducts>
  );
};

export default Products;
