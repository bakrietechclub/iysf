import React, { useState } from 'react'
import frequentlyAQ from '../../utils/Data/frequentlyAQ';

const Section6 = () => {
  const [limit, setLimit] = useState([0, 5]);

  return (
    <section className='container mb-4'>
      <h1 className='text-center pb-3'><strong>Frequently Asked Question (FAQ)</strong></h1>

      <div class="accordion" id="accordionPanelsStayOpenExample">
        {frequentlyAQ.slice(limit[0], limit[1]).map((value, key) => (
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class={`accordion-button ${!key < 1 && 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${key}`} aria-expanded="true" aria-controls={`panelsStayOpen-${key}`}>
                {value.asked}
              </button>
            </h2>
            <div id={`panelsStayOpen-${key}`} className={`accordion-collapse collapse ${key < 1 && 'show'}`}>
              <div class="accordion-body">
                {value.question}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-3'>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item"><button onClick={() => setLimit([0, 5])} class="page-link">1</button></li>
            <li class="page-item"><button onClick={() => setLimit([6, 10])} class="page-link">2</button></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Section6;
