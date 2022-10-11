import { render, screen } from '@testing-library/react';
import ConvertionInput from './ConvertionInput';

const text = 'El valor de la cripto es equivalente a ARS';
describe('ConvertionInput Test', () => {
  test('Esperamos que el componente renderice', () => {
    render(<ConvertionInput quoteCurrency={'ARS'}/>);

    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
});
