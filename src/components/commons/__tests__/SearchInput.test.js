import { render, act } from 'react-testing-library';

import { SearchInput } from '../SearchInput';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<SearchInput />);

    expect(container).toBeInTheDocument();
  });

  test('ser vazio', () => {
    const { getByDisplayValue } = render(<SearchInput readOnly />);

    expect(getByDisplayValue('')).toBeEmpty();
  });

  test('ter icon', () => {
    const { container } = render(
      <SearchInput value="Arroz" placeholder="Nome" readOnly />
    );

    expect(container.firstChild.firstChild.firstChild).toHaveAttribute(
      'data-icon',
      'search'
    );
  });

  test('ter placeholder', () => {
    const { getByDisplayValue } = render(
      <SearchInput value="Arroz" placeholder="Nome" readOnly />
    );

    expect(getByDisplayValue('Arroz')).toHaveAttribute('placeholder', 'Nome');
  });

  test('ser habilitado', () => {
    const { getByDisplayValue } = render(
      <SearchInput value="Arroz" readOnly />
    );

    expect(getByDisplayValue('Arroz')).toBeEnabled();
  });

  test('ser desabilitado', () => {
    const { getByDisplayValue } = render(
      <SearchInput value="Arroz" disabled readOnly />
    );

    expect(getByDisplayValue('Arroz')).toBeDisabled();
  });

  test('ter foco', () => {
    const { getByDisplayValue } = render(
      <SearchInput value="Arroz" readOnly />
    );
    const input = getByDisplayValue('Arroz');

    act(() => input.focus());

    expect(input).toHaveFocus();
  });

  test('ter foco e perder foco', () => {
    const { getByDisplayValue } = render(
      <SearchInput value="Arroz" readOnly />
    );
    const input = getByDisplayValue('Arroz');

    act(() => input.focus());
    expect(input).toHaveFocus();

    act(() => input.blur());
    expect(input).not.toHaveFocus();
  });
});
