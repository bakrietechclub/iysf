import React from 'react';
import LogoBNI from '../../utils/Images/Sponsors/bni.png';
import LogoVKTR from '../../utils/Images/Sponsors/VKTR.png';
import LogoBSP from '../../utils/Images/Sponsors/BSP.png';
import LogoEMP from '../../utils/Images/Sponsors/EMP.png';
import LogoPupukIndonesia from '../../utils/Images/Sponsors/Pupuk Indonesia.png';

const Section8 = () => {
  return (
    <section className='container'>
      <h2 className='text-center'><strong>Sponsorship</strong></h2>
      <div className="row text-center">
        {/* <div className="col-12">
          <img height={100} src={LogoBNI} alt='Logo BNI' />
        </div> */}
        <div className="col-12">
          <img height={100} src={LogoVKTR} alt='Logo VKTR' />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <img height={100} src={LogoBSP} alt='Logo BSP' />
        </div>
        <div className="col">
          <img height={100} src={LogoEMP} alt='Logo EMP' />
        </div>
        <div className="col">
          <img height={100} src={LogoPupukIndonesia} alt='Logo Pupuk Indonesia' />
        </div>
      </div>
    </section>
  )
}

export default Section8;
