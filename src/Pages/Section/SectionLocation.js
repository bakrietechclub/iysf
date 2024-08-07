import React from 'react'

const SectionLocation = () => {
  return (
    <section id='section-location' className='d-flex align-items-center mb-5'>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className='col'>
            <h4 className='text-white montserrat-bold'>September 07, 2024 | Sanctuary Auditorium, Menara Kuningan</h4>
            <h3 className='text-white montserrat-bold'>South Jakarta, Jakarta</h3>
          </div>
          <div className="col">
            <div class="ratio ratio-1x1">
              <iframe className='rounded-2' title='Sanctuary Auditorium' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.370625050842!2d106.82029891417235!3d-6.218464919182405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f35f552467d5%3A0xf91377c9b7cbf6f8!2sMenara%20Kuningan%20Ballroom%20I%20Sanctuary%20Auditorium!5e0!3m2!1sen!2sid!4v1723033478771!5m2!1sen!2sid" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionLocation