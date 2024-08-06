import React from 'react'
import TeaserVideo from '../utils/Videos/Teasier.webm'
import Image from '../utils/Images/Brand/Profil.png'

const Landing = () => {
  return (
    <>
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
            <button className='btn btn-primary'>APPLY NOW</button>
          </div>
        </div>
      </section>

      <section className='container py-5'>
        <div className='row'>
          <div className="col">
            <h1 className='poppins-bold' style={{ fontSize: '3.25rem' }}>
              Ready to shape a sustainable future? Join us at the <span style={{ backgroundColor: '#FFA500' }}>Indonesia Youth Sustainability Forum</span> and be a part of the change!
            </h1>
            <button className='btn btn-primary'>APPLY NOW</button>
          </div>
          <div className="col">
            <p>
              The Indonesia Youth Sustainability Forum (IYSF), hosted by the Bakrie Center Foundation in collaboration with the Coordinating Ministry for Maritime Affairs and Investment of Indonesia, provides a platform for Indonesian youth to discuss socio-environmental issues. The forum supports Indonesia's Sustainable Development Goals (SDGs) and the philosophy of Tri Hita Karana, which emphasizes harmony between humans, nature, and the Creator.
            </p>
          </div>
        </div>
      </section>

      <section id="section1" datatype='background'>
      </section>

      <section className='mt-5 container'>
        <div className="row">
          <div className="col">
            <img className='img-fluid' src={Image} alt="" />
          </div>
          <div className="col">
            <div>
              <h3>Energy Transition</h3>
              <p>
                The use of energy to sustain human life has led to significant environmental issues, including in Indonesia. This session will explore the crucial need for an energy transition in today's society, with a focus on Indonesia's role. Key topics include the importance of renewable energy, the need for a fair energy transition, the industry's role in sustainable production, and innovations in electric vehicles shaping the future of transportation in Indonesia and beyond
              </p>
              <h3>
                Blue Economy
              </h3>
              <p>
                Indonesia, a maritime nation with unparalleled resources, holds the key not only to unlocking its own economic potential, but also to safeguarding the health of our planet. This session delves into exploring responsible practices for cultivating a thriving and sustainable ocean environment. Our esteemed speakers will bring their expertise and experience to discuss a wide range of critical issues encompassing ocean management, flora and fauna, ethical carbon and sustainable marine ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing