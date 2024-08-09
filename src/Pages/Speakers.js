import React, { useState, useEffect } from 'react';
import ourSpeakers from '../utils/Data/ourSpeakers';

const Speakers = () => {

  const [detail, setDetail] = useState([0, 1]);

  const onHandleDetail = (key1, key2) => {
    setDetail([key1, key2]);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container mt-5'>
      <h1 className='text-center pb-3'>OUR <strong>SPEAKERS</strong></h1>

      <div className="row">
        {ourSpeakers.map((value, key1) => (
          <div key={key1} className="col-12 mb-3">
            <h3 className='mb-3'>{value.session}</h3>
            <div className='row'>
              {value.speakers.map((value, key2) => (
                <div key={key2} className='col-12 col-sm-6 col-md-3 mb-3' style={{ cursor: 'pointer' }}>
                  <div onClick={() => onHandleDetail(key1, key2)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" className="h-100 shadow-sm">
                    <img style={{ objectPosition: 'top', height: 250, maxHeight: 250 }} className='card-img object-fit-cover' src={value.image} alt={value.name} />
                    <div className="mx-3 card-body">
                      <h5 class="card-title mt-3">{value.name}</h5>
                      <small>{value.title}</small>
                      <h6>{value.company}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div style={{ padding: 0 }} class="offcanvas-body">
          <button type="button" data-bs-dismiss="offcanvas" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-white bg-opacity-50 rounded-pill" aria-label="Close"></button>
          <img className='img-fluid' src={ourSpeakers[detail[0]].speakers[detail[1]].image} alt={ourSpeakers[detail[0]].speakers[detail[1]].name} />
          <div style={{ padding: '1rem' }}>
            <h4>{ourSpeakers[detail[0]].speakers[detail[1]].name}</h4>
            <p>{ourSpeakers[detail[0]].speakers[detail[1]].description}</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Speakers;
