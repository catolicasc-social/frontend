import { render } from '@testing-library/react';

import ContainerProducts from '../index';

const CONTEUDO = 'Conteúdo';

jest.mock('next/link', () => ({ children }) => children);

describe('Conteúdo Tablist layout deve', () => {
  test('renderizar', () => {
    const { container } = render(<ContainerProducts />);

    expect(container).toBeInTheDocument();
  });

  test('ter título', () => {
    const { getAllByText } = render(<ContainerProducts />);

    expect(
      getAllByText((_, { textContent }) => textContent === 'Produtos')[1]
    ).toBeInTheDocument();
  });

  test('ter aba de produtos', () => {
    const { getAllByRole } = render(<ContainerProducts />);
    const [node] = getAllByRole(
      (_, { textContent }) => textContent === 'Produtos'
    );

    expect(node.textContent).toBe('Produtos');
    expect(node.id).toBe('/products');
  });

  test('ter aba de categorias', () => {
    const { getAllByRole } = render(<ContainerProducts />);
    const [node] = getAllByRole(
      (_, { textContent }) => textContent === 'Categorias'
    );

    expect(node.textContent).toBe('Categorias');
    expect(node.id).toBe('/products/categories');
  });

  test('ter aba de marcas', () => {
    const { getAllByRole } = render(<ContainerProducts />);
    const [node] = getAllByRole(
      (_, { textContent }) => textContent === 'Marcas'
    );

    expect(node.textContent).toBe('Marcas');
    expect(node.id).toBe('/products/brands');
  });

  test('ter aba de estoques', () => {
    const { getAllByRole } = render(<ContainerProducts />);
    const [node] = getAllByRole(
      (_, { textContent }) => textContent === 'Estoques'
    );

    expect(node.textContent).toBe('Estoques');
    expect(node.id).toBe('/products/stocks');
  });

  test('ter aba de validade de produtos', () => {
    const { getAllByRole } = render(<ContainerProducts />);
    const [node] = getAllByRole(
      (_, { textContent }) => textContent === 'Validade de produtos'
    );

    expect(node.textContent).toBe('Validade de produtos');
    expect(node.id).toBe('/products/validity');
  });

  test('ter aba de entrada', () => {
    const { getAllByRole } = render(<ContainerProducts />);
    const [node] = getAllByRole(
      (_, { textContent }) => textContent === 'Entrada'
    );

    expect(node.textContent).toBe('Entrada');
    expect(node.id).toBe('/products/input');
  });

  test('ter aba de saída', () => {
    const { getAllByRole } = render(<ContainerProducts />);
    const [node] = getAllByRole(
      (_, { textContent }) => textContent === 'Saída'
    );

    expect(node.textContent).toBe('Saída');
    expect(node.id).toBe('/products/output');
  });

  test('ter node filho', () => {
    const { getByText } = render(
      <ContainerProducts>{CONTEUDO}</ContainerProducts>
    );

    expect(getByText(CONTEUDO)).toBeInTheDocument();
  });
});
