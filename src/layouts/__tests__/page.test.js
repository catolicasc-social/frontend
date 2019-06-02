import { render } from '@testing-library/react';

import Page from '../page';

const CONTEUDO = 'Conteúdo';

jest.mock('next/link', () => ({ children }) => children);

describe('Página layout deve', () => {
  test('renderizar', () => {
    const { container } = render(<Page />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(<Page title={CONTEUDO} />);

    expect(getByText(CONTEUDO)).toBeInTheDocument();
  });

  test('ter node filho', () => {
    const { getByText } = render(<Page>{CONTEUDO}</Page>);

    expect(getByText(CONTEUDO)).toBeInTheDocument();
  });
});
