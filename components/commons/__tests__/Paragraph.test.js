import { render } from '@testing-library/react';

import { Paragraph } from '../Paragraph';

const PRODUTOS = 'Produtos';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Paragraph />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(<Paragraph>{PRODUTOS}</Paragraph>);

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter cor', () => {
    const { getByText } = render(
      <Paragraph color="#425A70">{PRODUTOS}</Paragraph>
    );

    expect(getByText(PRODUTOS)).toHaveStyle('color: #425A70;');
  });

  test('ter tamanho', () => {
    const { getByText } = render(<Paragraph size={500}>{PRODUTOS}</Paragraph>);

    expect(getByText(PRODUTOS)).toHaveStyle('font-size: 16px;');
  });

  test('ter espressura', () => {
    const { getByText } = render(<Paragraph size={500}>{PRODUTOS}</Paragraph>);

    expect(getByText(PRODUTOS)).toHaveStyle('font-weight: 400;');
  });
});
