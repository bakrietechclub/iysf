import React from 'react'
import statisticsWidget from '../../utils/Data/statisticsWidget'
import CountUp from 'react-countup'

const Section4 = () => {
  return (
    <section style={{ backgroundColor: '#FFA500' }}>
      <div className="container">
        <div className="row py-5">
          <div className='col'>
            <h4 className='montserrat-bold'>Who will be at</h4>
            <h3 style={{ fontSize: 32 }} className='montserrat-extrabold'>IYSF?</h3>
          </div>
          <div className="col">

          </div>
        </div>
        <div className='row py-5'>
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