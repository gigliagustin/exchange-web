import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('Test About-Us', () => {
  test('We expected the component to be rendered', () => {
    render(<AboutUs />);

    const element = screen.getByText('Agustin Gigli');

    expect(element).toBeInTheDocument();
  });
});
