import React, { useState } from 'react';
import LogoBCF from '../utils/Images/Brand/Logo BCF_11.png';
import LogoTVOne from '../utils/Images/Medpart/TVone.png';
import LogoISF from '../utils/Images/Menkomarves/ISF.png';
import LogoMenkomarvest from '../utils/Images/Menkomarves/Menkomarvest.png';
import Wave from '../utils/Images/Brand/wave.svg';
import { addDoc, collection } from 'firebase/firestore';

const Footer = ({ db }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const style = {
    fontSize: '1.5rem',
  };

  const onHandleSaveSubscription = async () => {
    setLoading(true);
    const docRef = await addDoc(collection(db, "users"), {
      email
    });
    setLoading(false);
    setEmail('');
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <>
      <img src={Wave} alt='Wave' />
      <div style={{ backgroundColor: '#87CEEB' }}>
        <div className='container'>
          <div class="row pt-3">
            <div class="col-12 col-md-2 mb-3">
              <h5>Organized by</h5>
              <img src={LogoBCF} height={100} alt='Bakrie Center Foundation' />
            </div>

            <div class="col-12 col-md-4 mb-3">
              <h5>Supported by</h5>
              <ul className='d-flex list-unstyled mt-auto'>
                <li className='me-3'>
                  <img src={LogoMenkomarvest} height={100} alt='Bakrie Center Foundation' />
                </li>
                <li class="d-flex align-items-center me-3">
                  <img src={LogoISF} height={100} alt='Bakrie Center Foundation' />
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-2 mb-3">
              <h5>Media Partner</h5>
              <img src={LogoTVOne} height={100} alt='TV One' />
            </div>

            <div class="col-md-3 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-md-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                  <button disabled={loading} onClick={() => onHandleSaveSubscription()} class="btn btn-primary" type="button">
                    {loading ?
                      <>
                        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                      </>
                      : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4">
            <p>© 2024 Bakrie Center Foundation, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li style={style} class="ms-3"><a class="link-body-emphasis" target='_blank' rel="noreferrer" href="https://www.instagram.com/bakriecenter"><i class="bi bi-instagram"></i></a></li>
              <li style={style} class="ms-3"><a class="link-body-emphasis" target='_blank' rel="noreferrer" href="https://www.tiktok.com/@bakriecenter"><i class="bi bi-tiktok"></i></a></li>
              <li style={style} class="ms-3"><a class="link-body-emphasis" target='_blank' rel="noreferrer" href="https://www.youtube.com/@bakriecenter"><i class="bi bi-youtube"></i></a></li>
              <li style={style} class="ms-3"><a class="link-body-emphasis" target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/bakrie-center-foundation"><i class="bi bi-linkedin"></i></a></li>
              <li style={style} class="ms-3"><a class="link-body-emphasis" target='_blank' rel="noreferrer" href="https://x.com/BakrieCenter"><i class="bi bi-twitter-x"></i></a></li>
              <li style={style} class="ms-3"><a class="link-body-emphasis" target='_blank' rel="noreferrer" href="https://facebook.com/bakriecenterfoundation"><i class="bi bi-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
