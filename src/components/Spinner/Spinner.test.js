import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

const text = 'Loading...';

describe('Spinner test', () => {
  test('Esperamos que renderice el Spinner', () => {
    render(<Spinner />);

    const element = screen.getAllByText(text);
    expect(element[0]).toBeInTheDocument();
  });
});
