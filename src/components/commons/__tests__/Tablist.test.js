import { render } from 'react-testing-library';

import { Tablist } from '../Tablist';

const items = [
  {
    title: 'Produto',
    icon: 'projects',
    tabs: [{ name: 'Produtos', href: 'itens' }]
  },
  {
    title: 'Movimentação',
    icon: 'changes',
    tabs: [{ name: 'Entrada', href: 'itens' }, { name: 'Saída', href: 'itens' }]
  }
];

jest.mock('next/link', () => ({ children }) => children);

describe('Tablist deve', () => {
  test('renderizar', () => {
    const { container } = render(<Tablist />);

    expect(container).toBeInTheDocument();
  });

  test('ter estilo fixo', () => {
    const { getByRole } = render(<Tablist />);

    expect(getByRole('tablist')).toHaveStyle(
      'height: calc(100vh - 50px); flex-basis: 240px; background-color: #fff;'
    );
  });

  test('ter título na primeira tab', () => {
    const { getByText } = render(<Tablist items={items} />);

    expect(getByText('Produto')).toBeInTheDocument();
    expect(getByText('Produto')).toHaveStyle(
      'font-size: 12px; font-weight: 600;'
    );
  });

  test('ter título na segunda tab', () => {
    const { getByText } = render(<Tablist items={items} />);

    expect(getByText('Movimentação')).toBeInTheDocument();
    expect(getByText('Produto')).toHaveStyle(
      'font-size: 12px; font-weight: 600;'
    );
  });

  test('ter subitem', () => {
    const { getByText } = render(<Tablist items={items} />);

    expect(getByText('Produtos')).toBeInTheDocument();
  });
});
