import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteCurrencyProvider } from '../../providers/CurrencyProvider';
import { ChainCurrencyProvider } from '../../providers/ChainProvider';
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

  test('We expect the button to change the theme dark', () => {
    const setTheme = jest.fn();

    render(<Navbar theme={'light'} setTheme={setTheme} />);

    const switchButton = screen.getByRole('switch');
    fireEvent.click(switchButton);
    expect(setTheme).toBeCalled();
  });
  test('We expect the button to change the theme light', () => {
    const setTheme = jest.fn();

    render(<Navbar theme={'dark'} setTheme={setTheme} />);

    const switchButton = screen.getByRole('switch');
    fireEvent.click(switchButton);
    expect(setTheme).toBeCalled();
  });
  test('We expected for the selected coin to be setted', () => {
    render(
      <ChainCurrencyProvider>
        <Navbar />
      </ChainCurrencyProvider>,
    );
    const buttonEth = screen.getByText('Ether');
    fireEvent.click(buttonEth);
    const element = screen.getByTestId('cripto-drop');

    expect(element.textContent).toBe('Ether');
  });
});
