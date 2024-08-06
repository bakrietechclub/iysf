import React from 'react';
import benefitDescription from '../../utils/Data/benefitDescription';
import Image from '../../utils/Images/Post 4.png';

const Section3 = () => {
  return (
    <section className='container py-5'>
      <div className='row d-flex align-items-center'>
        <div className="col-6">
          <h1 className='poppins-bold' style={{ fontSize: '2.25rem' }}>
            Benefits you can gain from participating in the <span style={{ color: '#2E8B57' }}>Indonesia <span style={{ backgroundColor: '#2E8B57', color: 'white' }}>Youth Sustainability</span> Forum</span>
          </h1>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            {benefitDescription.map((value, key) => (
              <div class="col d-flex align-items-start">
                <div>
                  <i style={{ fontSize: 22 }} className={`bi ${value.icon} flex-shrink-0 me-3`}></i>
                  <h3 className="fw-bold mb-0 fs-6 text-body-emphasis">{value.description}</h3>
                  {/* <p>{value.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <img src={Image} className='img-fluid' alt='images' />
        </div>
      </div>
    </section>
  )
}

export default Section3;
