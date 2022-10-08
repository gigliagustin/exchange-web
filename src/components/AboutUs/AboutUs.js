import React from 'react';
import { TeamMembers } from '../../constants/index';
import './aboutUs.scss';

const AboutUs = () => {
  return (
    <div className='container-fluid' id='about-us'>
      <p className='p-1 m-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="container-fluid d-flex justify-content-around flex-wrap ">
        {TeamMembers.map((members) => <div className='' key={members.id}>
          <img src={ members.image } alt="" className='memberImage m-2' />
          <p className='text-center fw-bold m-0' >{members.name}</p>
          <p className='text-center fw-light' >{members.role}</p>
        </div>)}
      </div>
    </div>
  );
};

export default AboutUs;
