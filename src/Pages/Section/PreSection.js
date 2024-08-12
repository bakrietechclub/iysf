import React from 'react'
import TeaserVideo from '../../utils/Videos/Teasier.webm'
import Banner from '../../utils/Images/Banner/Banner.png'

const Introduction = () => {
  return (
    <section id='' className=''>
      {/* <img src={Banner} class="img-fluid" alt="..." /> */}
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Banner} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="">
        {/* <h1 className='text-center poppins-bold rounded-2 text-white' style={{ backgroundColor: '#FFA500' }}>Indonesia Youth Sustainability Forum</h1> */}
        {/* <div className="d-flex justify-content-end">
          <div className='row'>
            <div className="col-6">

            </div>
            <div className='col-6'>
              <h1 style={{ backgroundColor: 'white' }}>IYSF</h1>
              <p style={{ backgroundColor: 'white' }}>September 07, 2024 | Sanctuary Auditorium, Menara Kuningan</p>
              <p style={{ backgroundColor: 'white' }}>
                Ready to shape a sustainable future? Join us at the Indonesia Youth Sustainability Forum and be a part of the change!
              </p>
              <a target='_blank' rel="noreferrer" href='https://www.eventbrite.com/e/indonesia-youth-sustainability-forum-2024-tickets-970233523587?aff=oddtdtcreator' className='btn btn-primary'>APPLY NOW</a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Introduction;
