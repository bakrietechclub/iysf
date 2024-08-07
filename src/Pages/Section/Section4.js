import React from 'react'
import statisticsWidget from '../../utils/Data/statisticsWidget'
import CountUp from 'react-countup'

const Section4 = () => {
  return (
    <section style={{ backgroundColor: '#FFA500' }}>
      <div className="container">
        <div className="row pt-5 d-flex align-items-center">
          <div className='col'>
            <h4 className='montserrat-bold'>Who will be at</h4>
            <h1 className='montserrat-extrabold'>IYSF?</h1>
          </div>
          <div className="col">
            <p>IYSF will bring together passionate and committed young people for sustainable growth and a better world. This event will feature great thinkers in the field of sustainability</p>
            <p>Join IYSF to create a better world</p>
          </div>
        </div>
        <div className='row pb-5'>
          {statisticsWidget.map((value, key) => (
            <div style={{ backgroundColor: '#FFF', margin: 5 }} className='col' key={key}>
              <div className='p-3'>
                <CountUp style={{ fontSize: 32 }} className='poppins-extrabold' end={value.count} duration={5} />
                <p className='poppins-bold'>{value.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section4