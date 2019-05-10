import { render } from 'react-testing-library';

import Header from '../Header';

const PRODUTOS = 'Produtos';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(<Header title={PRODUTOS} />);

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter cor', () => {
    const { getByText } = render(<Header title={PRODUTOS} />);

    expect(getByText(PRODUTOS)).toHaveStyle('color: #425A70;');
  });

  test('ter tamanho', () => {
    const { getByText } = render(<Header title={PRODUTOS} />);

    expect(getByText(PRODUTOS)).toHaveStyle('font-size: 16px;');
  });

  test('ter espressura', () => {
    const { getByText } = render(<Header title={PRODUTOS} />);

    expect(getByText(PRODUTOS)).toHaveStyle('font-weight: 500;');
  });
});
