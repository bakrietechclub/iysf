import React, { useState } from 'react';
import ourSpeakers from '../../utils/Data/ourSpeakers';
import { Link } from 'react-router-dom';

const Section5 = () => {
  const [speakers, setSpeakers] = useState([]);

  return (
    <section>
      <div className="container mt-5">
        <h1 className='text-center pb-3'>OUR <strong>SPEAKERS</strong></h1>

        <div className='row'>
          {ourSpeakers[0].speakers.map((value, key) => (
            <div key={key} className='col-12 col-md-6 col-lg-4 mb-3'>
              <div className="h-100 shadow-sm">
                <img style={{ objectPosition: 'top' }} height={350} className='card-img object-fit-cover' src={value.image} alt={value.name} />
                <div className="mx-3 card-body">
                  <h5 class="card-title mt-3">{value.name}</h5>
                  <small>{value.title}</small>
                  <h6>{value.company}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center pt-4'>
          <Link className='btn btn-primary' to='speakers'>SEE MORE</Link>
        </div>
      </div>
    </section>
  )
}

export default Section5;
