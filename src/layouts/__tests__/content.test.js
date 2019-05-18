import { render } from 'react-testing-library';

import Content from '../content';

const CONTEUDO = 'Conteúdo';

jest.mock('next/link', () => ({ children }) => children);

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Content />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(<Content title={CONTEUDO} />);

    expect(getByText(CONTEUDO)).toBeInTheDocument();
  });

  test('ter ter node filho', () => {
    const { getByText } = render(<Content>{CONTEUDO}</Content>);

    expect(getByText(CONTEUDO)).toBeInTheDocument();
  });
});
