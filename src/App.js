import { AboutUs } from './components/AboutUs';
import { Graph } from './components/Graph';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Graph />
      <AboutUs />
    </div>
  );
};

export default App;
