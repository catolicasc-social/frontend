import { render, act } from '@testing-library/react';

import { Textarea } from '../Textarea';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Textarea />);

    expect(container).toBeInTheDocument();
  });

  test('ser vazio', () => {
    const { getByDisplayValue } = render(<Textarea readOnly />);

    expect(getByDisplayValue('')).toBeEmpty();
  });

  test('ter placeholder', () => {
    const { getByDisplayValue } = render(
      <Textarea value="Arroz" placeholder="Nome" readOnly />
    );

    expect(getByDisplayValue('Arroz')).toHaveAttribute('placeholder', 'Nome');
  });

  test('ser habilitado', () => {
    const { getByDisplayValue } = render(<Textarea value="Arroz" readOnly />);

    expect(getByDisplayValue('Arroz')).toBeEnabled();
  });

  test('ser desabilitado', () => {
    const { getByDisplayValue } = render(
      <Textarea value="Arroz" disabled readOnly />
    );

    expect(getByDisplayValue('Arroz')).toBeDisabled();
  });

  test('ter foco', () => {
    const { getByDisplayValue } = render(<Textarea value="Arroz" readOnly />);
    const input = getByDisplayValue('Arroz');

    act(() => input.focus());

    expect(input).toHaveFocus();
  });

  test('ter foco e perder foco', () => {
    const { getByDisplayValue } = render(<Textarea value="Arroz" readOnly />);
    const input = getByDisplayValue('Arroz');

    act(() => input.focus());
    expect(input).toHaveFocus();

    act(() => input.blur());
    expect(input).not.toHaveFocus();
  });
});
