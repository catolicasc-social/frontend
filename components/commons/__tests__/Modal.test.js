import { render } from '@testing-library/react';

import Modal from '../Modal';

const PRODUTOS = 'Produtos';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Modal isShown>conteúdo</Modal>);

    expect(container).toBeInTheDocument();
  });

  test('ter node filho', () => {
    const { getByText } = render(<Modal isShown>{PRODUTOS}</Modal>);

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getByText } = render(
      <Modal title={PRODUTOS} isShown>
        conteúdo
      </Modal>
    );

    expect(getByText(PRODUTOS)).toBeInTheDocument();
  });

  test('ter botão custom de salvar', () => {
    const { getByText } = render(
      <Modal confirmLabel="Salvar" isShown>
        conteúdo
      </Modal>
    );

    expect(getByText('Salvar')).toBeInTheDocument();
  });
});
