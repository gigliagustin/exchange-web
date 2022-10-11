import React from 'react';

const Spinner = () => {
  return (
    <div id='spinner'>
      <div className='spinner-grow spinner-grow_delay-1' role="status">
        <span className='visually-hidden'>Loading...</span>
      </div>
      <div className='spinner-grow spinner-grow_delay-2 text-custom-primary mx-2' role="status">
        <span className='visually-hidden'>Loading...</span>
      </div>
      <div className='spinner-grow spinner-grow_delay-1' role="status">
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
