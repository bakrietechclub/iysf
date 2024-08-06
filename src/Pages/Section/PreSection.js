import React from 'react'
import TeaserVideo from '../../utils/Videos/Teasier.webm'

const Introduction = () => {
  return (
    <section className='container py-5'>
      <div className="row d-flex align-items-center">
        <div className='col'>
          <video width={300} autoPlay loop playsInline muted>
            <source src={TeaserVideo} type='video/webm' />
          </video>
        </div>
        <div className='col'>
          <h1>IYSF</h1>
          <p>September 07, 2024 | Sanctuary Auditorium, Menara Kuningan</p>
          <p>
            Ready to shape a sustainable future? Join us at the Indonesia Youth Sustainability Forum and be a part of the change!
          </p>
          <a target='_blank' rel="noreferrer" href='https://www.eventbrite.com/e/indonesia-youth-sustainability-forum-2024-tickets-970233523587?aff=oddtdtcreator' className='btn btn-primary'>APPLY NOW</a>
        </div>
      </div>
    </section>
  )
}

export default Introduction;
