import { render, fireEvent } from 'react-testing-library';

import { Button } from '../Button';

const SALVAR = 'Salvar';

describe('Botão deve', () => {
  test('renderizar', () => {
    const { container } = render(<Button />);

    expect(container).toBeInTheDocument();
  });

  test('ter SALVAR', () => {
    const { getByText } = render(<Button>{SALVAR}</Button>);

    expect(getByText('Salvar')).toBeInTheDocument();
  });

  test('ser desabilitado', () => {
    const { getByText } = render(<Button disabled>{SALVAR}</Button>);

    expect(getByText('Salvar')).toBeDisabled();
  });

  test('ter loading spinner e ser desabilitado', () => {
    const { getByText } = render(
      <Button isLoading disabled>
        {SALVAR}
      </Button>
    );

    const button = getByText('Salvar');

    expect(button.firstChild).toHaveAttribute('delay', '0');
    expect(button).toBeDisabled();
  });

  test('ser uma vez clicado', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>{SALVAR}</Button>);

    fireEvent.click(getByText(SALVAR));

    expect(onClick).toHaveBeenCalled();
  });
});
