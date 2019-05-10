import { render } from 'react-testing-library';

import { Alert } from '../Alert';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Alert />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(
      <Alert title="Produto cadastrado com sucesso" />
    );

    expect(getByText('Produto cadastrado com sucesso')).toBeInTheDocument();
  });

  test('ter descrição', () => {
    const { getByText } = render(<Alert>Salvo com sucesso!</Alert>);

    expect(getByText('Salvo com sucesso!')).toBeInTheDocument();
  });
});
