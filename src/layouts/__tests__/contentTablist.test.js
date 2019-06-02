import { render } from '@testing-library/react';

import ContentTablist from '../contentTablist';

const CONTEUDO = 'Conteúdo';
const ITEMS = [
  {
    title: 'Produto',
    icon: 'projects',
    tabs: [{ name: 'Produtos da aba', href: '/products' }]
  }
];

jest.mock('next/link', () => ({ children }) => children);

describe('Conteúdo Tablist layout deve', () => {
  test('renderizar', () => {
    const { container } = render(<ContentTablist />);

    expect(container).toBeInTheDocument();
  });

  test('ter abas', () => {
    const { getByText } = render(<ContentTablist items={ITEMS} />);

    expect(getByText('Produtos da aba')).toBeInTheDocument();
  });

  test('ter node filho', () => {
    const { getByText } = render(<ContentTablist>{CONTEUDO}</ContentTablist>);

    expect(getByText(CONTEUDO)).toBeInTheDocument();
  });
});
