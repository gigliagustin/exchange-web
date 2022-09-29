import React from 'react';
import Header from './components/Header';
import {
  ThemeProvider,
} from './providers/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
