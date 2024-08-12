import React, { useState } from 'react'
import IysfLogo from '../../utils/Images/Brand/Logo IYSF tulisan samping putih.png'
import keyTopics from '../../utils/Data/keyTopics';

const Section2 = () => {
  const [topicsId, setTopicsId] = useState(0);

  return (
    <section className='mt-5 container'>
      <div className="row">
        <div className="col-12 col-md-6">
          {/* <img className='img-fluid' src={keyTopics[imageId].image} alt="" /> */}
          <div style={{ backgroundImage: `url('${keyTopics[topicsId].image}')` }} className="card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {keyTopics[topicsId].title}
              </h3>
              <p>
                {keyTopics[topicsId].description}
              </p>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img src={IysfLogo} alt="Bootstrap" height={100} />
                </li>
                <li class="d-flex align-items-center me-3">
                  {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg> */}
                  <small>Earth</small>
                </li>
                <li class="d-flex align-items-center">
                  {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg> */}
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {keyTopics.map((value, key) => (
            <div className='card-hover' style={{ cursor: 'default' }} onMouseEnter={() => setTopicsId(key)} key={key}>
              <div className='p-3'>
                <h3>{value.title}</h3>
                <p className='text-truncate'>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Section2