import { render, fireEvent, cleanup } from '@testing-library/react';

import Table from '../Table';

const items = [
  {
    id: 1,
    name: `name1`,
    category: `categoria1`
  },
  {
    id: 2,
    name: `name2`,
    category: `categoria2`
  },
  {
    id: 3,
    name: `name3`,
    category: `categoria3`
  }
];

describe('A Tabela', () => {
  afterEach(cleanup);

  test('deve renderizar', () => {
    const { container } = render(<Table items={[]} header={{}} />);
    expect(container).toBeInTheDocument();
  });

  test('deve possuir todos os headers', () => {
    const header = { id: 'ID', name: 'Nome', category: 'Categoria' };
    const { getByText } = render(<Table items={items} header={header} />);
    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('Nome')).toBeInTheDocument();
    expect(getByText('Categoria')).toBeInTheDocument();
  });

  test('deve possuir todos os items', () => {
    const header = { name: 'Nome' };
    const { getByText } = render(<Table items={items} header={header} />);
    expect(getByText('name1')).toBeInTheDocument();
    expect(getByText('name2')).toBeInTheDocument();
    expect(getByText('name3')).toBeInTheDocument();
  });

  test('não deve possuir as propriedades não específicadas', () => {
    const header = { category: 'Categoria' };
    const { queryByText } = render(<Table items={items} header={header} />);
    expect(queryByText('name1')).toBeNull();
    expect(queryByText('name2')).toBeNull();
    expect(queryByText('name3')).toBeNull();
  });

  test('deve renderizar o componente opcional no Header', () => {
    const { container } = render(<div>Teste Custom Header</div>);
    const { getByText } = render(
      <Table items={[]} header={{}} hearderOptions={container} />
    );
    expect(getByText('Teste Custom Header')).toBeInTheDocument();
  });

  describe('deve filtrar', () => {
    test('baseado na propriedade passada', () => {
      const header = { name: 'Nome' };
      const { getByPlaceholderText, queryByText } = render(
        <Table items={items} header={header} searchProperty="name" />
      );
      const searchInput = getByPlaceholderText('Pesquisar...');
      fireEvent.change(searchInput, { target: { value: 'name3' } });
      expect(queryByText('name1')).toBeNull();
      expect(queryByText('name2')).toBeNull();
      expect(queryByText('name3')).toBeInTheDocument();
    });

    test('verificando se o contém parcialmente o texto', () => {
      const header = { name: 'Nome' };
      const { getByPlaceholderText, queryByText } = render(
        <Table items={items} header={header} searchProperty="name" />
      );
      const searchInput = getByPlaceholderText('Pesquisar...');
      fireEvent.change(searchInput, { target: { value: 'name' } });
      expect(queryByText('name1')).toBeInTheDocument();
      expect(queryByText('name2')).toBeInTheDocument();
      expect(queryByText('name3')).toBeInTheDocument();
    });

    test('ignorando uppercase e lowercase', () => {
      const header = { name: 'Nome' };
      const { getByPlaceholderText, queryByText } = render(
        <Table items={items} header={header} searchProperty="name" />
      );
      const searchInput = getByPlaceholderText('Pesquisar...');
      fireEvent.change(searchInput, { target: { value: 'NAM' } });
      expect(queryByText('name1')).toBeInTheDocument();
      expect(queryByText('name2')).toBeInTheDocument();
      expect(queryByText('name3')).toBeInTheDocument();
    });

    test('ignorar pesquisa quando a propriedade é inexistente', () => {
      const header = { name: 'Nome' };
      const { getByPlaceholderText, queryByText } = render(
        <Table items={items} header={header} searchProperty="category" />
      );
      const searchInput = getByPlaceholderText('Pesquisar...');
      fireEvent.change(searchInput, { target: { value: 'name1' } });
      expect(queryByText('name1')).toBeInTheDocument();
      expect(queryByText('name2')).toBeInTheDocument();
      expect(queryByText('name3')).toBeInTheDocument();
    });
  });
});
