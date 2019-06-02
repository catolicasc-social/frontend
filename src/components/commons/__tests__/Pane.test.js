import { render, fireEvent } from '@testing-library/react';

import { Pane } from '../Pane';

const PRODUTOS = 'Produtos';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Pane />);

    expect(container).toBeInTheDocument();
  });

  test('ter node filho', () => {
    const { getByText } = render(<Pane>{PRODUTOS}</Pane>);

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter cor', () => {
    const { getByText } = render(<Pane color="#425A70">{PRODUTOS}</Pane>);

    expect(getByText(PRODUTOS)).toHaveStyle('color: #425A70;');
  });

  test('ter altura', () => {
    const { getByText } = render(<Pane height={48}>{PRODUTOS}</Pane>);

    expect(getByText(PRODUTOS)).toHaveStyle('height: 48px;');
  });

  test('ter largura', () => {
    const { getByText } = render(<Pane width={100}>{PRODUTOS}</Pane>);

    expect(getByText(PRODUTOS)).toHaveStyle('width: 100px;');
  });

  test('ter cor de fundo', () => {
    const { getByText } = render(<Pane backgroundColor="red">{PRODUTOS}</Pane>);

    expect(getByText(PRODUTOS)).toHaveStyle('background-color: red;');
  });

  test('ser uma vez clicado', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Pane onClick={onClick}>{PRODUTOS}</Pane>);

    fireEvent.click(getByText(PRODUTOS));

    expect(onClick).toHaveBeenCalled();
  });
});
