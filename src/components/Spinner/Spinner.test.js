import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

const text = 'Loading...';
const role = 'status';

describe('Spinner test', () => {
  test('Esperamos que renderice el Spinner', () => {
    render(<Spinner />);

    const element = screen.getAllByText(text);
    expect(element[0]).toBeInTheDocument();
  });
  test('Esperamos que renderice el Spinner con tema oscuro', () => {
    render(<Spinner theme={'dark'}/>);

    const element = screen.getAllByRole(role);
    expect(element[0]).toHaveClass('text-custom-secondary');
  });
});
