import {
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
} from 'recharts';
import BlankSlate from '../BlankSlate/BlankSlate';
import { Spinner } from '../Spinner';

const Graph = ({ isLoading, isError, historical }) => {
  if (historical.length === 0) {
    return <BlankSlate />;
  }

  if (isLoading || isError) {
    return (
      <div className='container d-flex justify-content-center mt-5'>
        <Spinner />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={220} id='graphic-container'>
      <LineChart data={historical} width={320} height={320} margin={{
        left: -15, right: 10,
      }}
      >
        <XAxis dataKey="date" angle={-10} />
        <YAxis />
        <Tooltip />
        <Line
          type='linear'
          dataKey='price'
          stroke='#a12829'
          dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
