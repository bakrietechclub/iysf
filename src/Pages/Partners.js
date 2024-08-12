import React from 'react';
import LogoBNI from '../utils/Images/Sponsors/bni.png';
import LogoVKTR from '../utils/Images/Sponsors/VKTR.png';
import LogoBSP from '../utils/Images/Sponsors/BSP.png';
import LogoEMP from '../utils/Images/Sponsors/EMP.png';
import LogoPupukIndonesia from '../utils/Images/Sponsors/Pupuk Indonesia.png';

const Partners = () => {
  return (
    <div className='container mt-5 text-center'>
      <h1 className='pb-3'><strong>SPONSORS</strong></h1>

      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <h5>Prosperity</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              {/* <div className="row">
                <div className="col-12">
                  <img height={100} src={LogoBNI} alt='Logo BNI' />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <h5>Planet</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div className="row">
                <div className="col-12">
                  <img height={100} src={LogoVKTR} alt='Logo VKTR' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              <h5>People</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div className="row">
                <div className="col-4">
                  <img height={100} src={LogoBSP} alt='Logo BNI' />
                </div>
                <div className="col-4">
                  <img height={100} src={LogoEMP} alt='Logo VKTR' />
                </div>
                <div className="col-4">
                  <img height={100} src={LogoPupukIndonesia} alt='Logo VKTR' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h2>Prosperity</h2>
      <div className="row">
        <div className="col-12">
          <img height={100} src={LogoBNI} alt='Logo BNI' />
        </div>
      </div>

      <h2>Planet</h2>
      <div className="row">
        <div className="col-12">
          <img height={100} src={LogoVKTR} alt='Logo VKTR' />
        </div>
      </div>

      <h2>People</h2>
      <div className="row">
        <div className="col-4">
          <img height={100} src={LogoBSP} alt='Logo BNI' />
        </div>
        <div className="col-4">
          <img height={100} src={LogoEMP} alt='Logo VKTR' />
        </div>
        <div className="col-4">
          <img height={100} src={LogoPupukIndonesia} alt='Logo VKTR' />
        </div>
      </div> */}
    </div>
  )
}

export default Partners;
