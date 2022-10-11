import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const text = 'Exchange Web © A1-React Advanced, 2022. Todos los derechos reservados.';

describe('Footer Test', () => {
  test('We expect the component to be rendered', () => {
    render(<Footer />);

    const element = screen.getByText(text);

    expect(element).toBeInTheDocument();
  });
});
