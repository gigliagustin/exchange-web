import React from 'react';
import Spinner from '../Spinner/Spinner';

const BlankSlate = ({ isLoading }) => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center box border py-5 mt-3'>
      { isLoading
        && (<Spinner />)
      }
      <p>Please, Choose a currency</p>
    </div>
  );
};

export default BlankSlate;
