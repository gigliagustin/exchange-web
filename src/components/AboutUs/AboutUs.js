import React from 'react';
import { TeamMembers } from '../../constants/index';
import './aboutUs.scss';

const AboutUs = () => {
  return (
    <div className='container-fluid' id='about-us'>
      <p className='p-2  mt-4 mb-4 fs-4 text-center'>Somos alumnos de la comisión de React Advanced en Rolling Code. Estamos presentando nuestro primer proyecto implementando todos los conocimientos adquiridos hasta el momento.</p>
      <div className="container-fluid d-flex justify-content-around flex-wrap ">
        {TeamMembers.map((members) => <div className='' key={members.id}>
          <img src={members.image} alt="" className='memberImage m-2' />
          <p className='text-center fw-bold m-0' >{members.name}</p>
          <p className='text-center fw-light' >{members.role}</p>
        </div>)}
      </div>
    </div>
  );
};

export default AboutUs;
