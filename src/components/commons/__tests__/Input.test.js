import { render, act } from 'react-testing-library';

import Input from '../Input';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Input />);

    expect(container).toBeInTheDocument();
  });

  test('ser vazio', () => {
    const { getByDisplayValue } = render(<Input readOnly />);

    expect(getByDisplayValue('')).toBeEmpty();
  });

  test('ter placeholder', () => {
    const { getByDisplayValue } = render(
      <Input value="Arroz" placeholder="Nome" readOnly />
    );

    expect(getByDisplayValue('Arroz')).toHaveAttribute('placeholder', 'Nome');
  });

  test('ser habilitado', () => {
    const { getByDisplayValue } = render(<Input value="Arroz" readOnly />);

    expect(getByDisplayValue('Arroz')).toBeEnabled();
  });

  test('ser desabilitado', () => {
    const { getByDisplayValue } = render(
      <Input value="Arroz" disabled readOnly />
    );

    expect(getByDisplayValue('Arroz')).toBeDisabled();
  });

  test('ter foco', () => {
    const { getByDisplayValue } = render(<Input value="Arroz" readOnly />);
    const input = getByDisplayValue('Arroz');

    act(() => input.focus());

    expect(input).toHaveFocus();
  });

  test('ter foco e perder foco', () => {
    const { getByDisplayValue } = render(<Input value="Arroz" readOnly />);
    const input = getByDisplayValue('Arroz');

    act(() => input.focus());
    expect(input).toHaveFocus();

    act(() => input.blur());
    expect(input).not.toHaveFocus();
  });
});
