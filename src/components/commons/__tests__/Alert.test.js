import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { Alert } from '../Alert';

afterEach(cleanup);

test('initial test', () => {
  const { getByText } = render(
    <Alert title="Produto cadastrado com sucesso" />
  );

  expect(getByText('Produto cadastrado com sucesso')).toBeInTheDocument();
});
