import { render } from '@testing-library/react';

import Dialog from '../Dialog';

const PRODUTOS = 'Produtos';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Dialog isShown>conteúdo</Dialog>);

    expect(container).toBeInTheDocument();
  });

  test('ter node filho', () => {
    const { getByText } = render(<Dialog isShown>{PRODUTOS}</Dialog>);

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(
      <Dialog title={PRODUTOS} isShown>
        conteúdo
      </Dialog>
    );

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter botão custom de salvar', () => {
    const { getByText } = render(
      <Dialog confirmLabel="Salvar" isShown>
        conteúdo
      </Dialog>
    );

    expect(getByText('Salvar')).toBeInTheDocument();
  });
});
