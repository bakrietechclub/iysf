import React from 'react';
import IysfLogo from '../../utils/Images/Brand/Logo IYSF tulisan samping putih.png'
import howYouCanJoinUs from '../../utils/Data/howYouCanJoinUs';

const Section7 = () => {
  return (
    <section className='mt-5 mb-5'>
      <div className='container'>
        <h1 className='text-center pb-3 poppins-semibold'>LEARN HOW YOU CAN <strong>JOIN US</strong></h1>
        <p>If you want to attend IYSF, you must register first. Due to limited seating and high demand, tickets for this conference are expected to sell out very quickly</p>
        {/* <div className="row pt-3">
          {howYouCanJoinUs.map((value, key) => (
            <div key={key} className='col-4'>
              <div className="card h-100">
                <img height={200} className='object-fit-cover card-img-top' src={value.image} alt={value.step} />
                <div className="card-body">
                  <h5 class="card-title">{value.step}</h5>
                  <p className='card-text'>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="row">
          {howYouCanJoinUs.map((value, key) => (
            <div className="col-4">
              <div style={{ backgroundImage: `url('${value.image}')`, opacity: 1 }} className="card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg">
                <div style={{ opacity: 1 }} className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Step {key + 1}
                  </h3>
                  <h5>{value.step}</h5>
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section7