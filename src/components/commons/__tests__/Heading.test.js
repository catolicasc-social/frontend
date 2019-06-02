import { render } from '@testing-library/react';

import { Heading } from '../Heading';

const DASHBOARD = 'Dashboard';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Heading />);

    expect(container).toBeInTheDocument();
  });

  test('ter texto', () => {
    const { getByText } = render(<Heading>{DASHBOARD}</Heading>);

    expect(getByText(DASHBOARD)).toBeInTheDocument();
  });

  test('ter cor', () => {
    const { getByText } = render(<Heading size={600}>{DASHBOARD}</Heading>);

    expect(getByText(DASHBOARD)).toHaveStyle('color: #234361;');
  });

  test('ter tamanho', () => {
    const { getByText } = render(<Heading size={600}>{DASHBOARD}</Heading>);

    expect(getByText(DASHBOARD)).toHaveStyle('font-size: 20px;');
  });

  test('ter espressura', () => {
    const { getByText } = render(<Heading size={600}>{DASHBOARD}</Heading>);

    expect(getByText(DASHBOARD)).toHaveStyle('font-weight: 500;');
  });
});
