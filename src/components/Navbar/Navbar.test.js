import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteCurrencyProvider } from '../../providers/CurrencyProvider';
import Navbar from './Navbar';

describe('Navbar Test', () => {
  test('We expect the component to be rendered', () => {
    render(<Navbar />);

    const element = screen.getByText('USD');

    expect(element).toBeInTheDocument();
  });

  test('We expected for the selected coin to be setted', () => {
    render(
            <QuoteCurrencyProvider>
                <Navbar />
            </QuoteCurrencyProvider>,
    );

    const buttonArs = screen.getByText('ARS');
    fireEvent.click(buttonArs);
    const element = screen.getByTestId('a-element');

    expect(element.textContent).toBe('ARS');
  });
});
