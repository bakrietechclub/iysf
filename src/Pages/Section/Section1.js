import React from 'react'

const Section1 = () => {
  return (
    <section className='container py-5'>
      <div className='row d-flex align-items-center'>
        <div className="col">
          <h1 className='poppins-bold' style={{ fontSize: '3.25rem' }}>
            Ready to shape a sustainable future? Join us at the <span style={{ backgroundColor: '#FFA500' }}>Indonesia Youth Sustainability Forum</span> and be a part of the change!
          </h1>
          <a target='_blank' rel="noreferrer" href='https://www.eventbrite.com/e/indonesia-youth-sustainability-forum-2024-tickets-970233523587?aff=oddtdtcreator' className='btn btn-primary'>APPLY NOW</a>
        </div>
        <div className="col">
          <p>
            The Indonesia Youth Sustainability Forum (IYSF), hosted by the Bakrie Center Foundation in collaboration with the Coordinating Ministry for Maritime Affairs and Investment of Indonesia, provides a platform for Indonesian youth to discuss socio-environmental issues. The forum supports Indonesia's Sustainable Development Goals (SDGs) and the philosophy of Tri Hita Karana, which emphasizes harmony between humans, nature, and the Creator.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section1;
