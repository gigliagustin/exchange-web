import { render, screen } from '@testing-library/react';
import BlankSlate from './BlankSlate';

const text = 'Por favor, elige una criptomoneda para continuar...';

describe('Blank Slate test', () => {
  test('Esperamos que renderice el componente el BlankSlate', () => {
    render(<BlankSlate />);

    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
});
