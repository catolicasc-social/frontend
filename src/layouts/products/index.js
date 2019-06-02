import PageTablist from '../pageTablist';

const getTablist = () => {
  return [
    {
      title: 'Produto',
      icon: 'projects',
      tabs: [{ name: 'Produtos', href: '/products' }]
    },
    {
      title: 'Categoria',
      icon: 'tag',
      tabs: [
        { name: 'Categorias', href: '/products/categories' },
        { name: 'Marcas', href: '/products/brands' }
      ]
    },
    {
      title: 'Estoque',
      icon: 'layers',
      tabs: [
        { name: 'Estoques', href: '/products/stocks' },
        { name: 'Validade de produtos', href: '/products/validity' }
      ]
    },
    {
      title: 'Movimentação',
      icon: 'changes',
      tabs: [
        { name: 'Entrada', href: '/products/input' },
        { name: 'Saída', href: '/products/output' }
      ]
    }
  ];
};

const ContainerProducts = ({ children }) => {
  return (
    <PageTablist title="Produtos" items={getTablist()}>
      {children}
    </PageTablist>
  );
};

export default ContainerProducts;
