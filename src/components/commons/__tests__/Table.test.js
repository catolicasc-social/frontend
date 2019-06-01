import { render } from 'react-testing-library';
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

describe('Tabela deve', () => {
  test('renderizar', () => {
    const { container } = render(<Table items={[]} header={{}} />);
    expect(container).toBeInTheDocument();
  });

  test('possuir todos os headers', () => {
    const header = { id: 'ID', name: 'Nome', category: 'Categoria' };
    const { getByText } = render(<Table items={items} header={header} />);
    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('Nome')).toBeInTheDocument();
    expect(getByText('Categoria')).toBeInTheDocument();
  });

  test('possuir todos os items', () => {
    const header = { name: 'Nome' };
    const { getByText } = render(<Table items={items} header={header} />);
    expect(getByText('name1')).toBeInTheDocument();
    expect(getByText('name2')).toBeInTheDocument();
    expect(getByText('name3')).toBeInTheDocument();
  });

  test('não possuir as propriedades não específicadas', () => {
    const header = { category: 'Categoria' };
    const { queryByText } = render(<Table items={items} header={header} />);
    expect(queryByText('name1')).toBeNull();
    expect(queryByText('name2')).toBeNull();
    expect(queryByText('name3')).toBeNull();
  });

  test('renderizar o componente opcional no Header', () => {
    const { container } = render(<div>Teste Custom Header</div>);
    const { getByText } = render(
      <Table items={[]} header={{}} hearderOptions={container} />
    );
    expect(getByText('Teste Custom Header')).toBeInTheDocument();
  });
});
