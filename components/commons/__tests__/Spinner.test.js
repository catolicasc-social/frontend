import { render } from '@testing-library/react';

import { Spinner } from '../Spinner';

describe('Alerta deve', () => {
  test('renderizar', () => {
    const { container } = render(<Spinner />);

    expect(container).toBeInTheDocument();
  });

  test('ter delay 0', () => {
    const { container } = render(<Spinner delay={0} />);

    expect(container.firstChild).toHaveAttribute('delay', '0');
  });
});
