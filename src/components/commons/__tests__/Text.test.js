import { render } from '@testing-library/react';

import { Text } from '../Text';

const PRODUTOS = 'Produtos';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Text />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(<Text>{PRODUTOS}</Text>);

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter cor', () => {
    const { getByText } = render(<Text color="#425A70">{PRODUTOS}</Text>);

    expect(getByText(PRODUTOS)).toHaveStyle('color: #425A70;');
  });

  test('ter tamanho', () => {
    const { getByText } = render(<Text size={500}>{PRODUTOS}</Text>);

    expect(getByText(PRODUTOS)).toHaveStyle('font-size: 16px;');
  });

  test('ter espressura', () => {
    const { getByText } = render(<Text size={500}>{PRODUTOS}</Text>);

    expect(getByText(PRODUTOS)).toHaveStyle('font-weight: 400;');
  });
});
