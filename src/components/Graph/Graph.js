import classNames from 'classnames';
import {
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { useQuoteCurrencyContext } from '../../providers/CurrencyProvider';
import { useThemeContext } from '../../providers/ThemeProvider';
import BlankSlate from '../BlankSlate/BlankSlate';
import { Spinner } from '../Spinner';

/* istanbul ignore next */
const Graph = ({ isLoading, isError, historical }) => {
  const quoteCurrency = useQuoteCurrencyContext();
  const theme = useThemeContext();
  if (historical.length === 0) {
    return <BlankSlate />;
  }

  if (isLoading || isError) {
    return (
      <div className='container d-flex align-items-center justify-content-center py-5 my-5'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classNames('container', {
      'text-black': theme === 'light',
      'text-white': theme === 'dark',
    })} id='about-us'>
      <h3 className='mb-4 text-center'>Cambio de la moneda {quoteCurrency} a través del tiempo</h3>
      <ResponsiveContainer width="100%" height={270} id='graphic-container'>
        <LineChart data={historical} width={320} height={320} margin={{
          left: -15, right: 10,
        }}
        >
          <XAxis dataKey="date" angle={-10} stroke={theme === 'light' ? '#2c282c' : '#fdfdfd'} />
          <YAxis width={80} stroke={theme === 'light' ? '#2c282c' : '#fdfdfd'} />
          <Tooltip
            contentStyle={theme === 'light' ? { backgroundColor: '#fdfdfd' } : { backgroundColor: '#2c282c' }}
          />
          <Line
            type='linear'
            dataKey='price'
            stroke='#a12829'
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
