import { render } from '@testing-library/react';

import PageTablist from '../pageTablist';

const CONTEUDO = 'Conteúdo';
const TITULO = 'Produtos título';
const ITEMS = [
  {
    title: 'Produto',
    icon: 'projects',
    tabs: [{ name: 'Produtos da aba', href: '/products' }]
  }
];

jest.mock('next/link', () => ({ children }) => children);

describe('Página Tablist layout deve', () => {
  test('renderizar', () => {
    const { container } = render(<PageTablist />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(<PageTablist title={TITULO} />);

    expect(getByText(TITULO)).toBeInTheDocument();
  });

  test('ter abas', () => {
    const { getByText } = render(<PageTablist items={ITEMS} />);

    expect(getByText('Produtos da aba')).toBeInTheDocument();
  });

  test('ter node filho', () => {
    const { getByText } = render(<PageTablist>{CONTEUDO}</PageTablist>);

    expect(getByText(CONTEUDO)).toBeInTheDocument();
  });
});
