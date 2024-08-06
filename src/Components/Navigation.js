import React from 'react'
import Logo from '../utils/Images/Brand/Logo IYSF tulisan samping.png'

const Navigation = () => {
  return (
    <nav class="sticky-top" style={{ backgroundColor: '#87CEEB' }}>
      <div class="container">
        {/* <a class="navbar-brand" href="#/">
          <div class="d-flex align-items-center">
            <img src={Logo} alt="Logo" height={60} class="d-inline-block align-text-top" />
          </div>
        </a> */}
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
              <img src={Logo} alt="Logo" height={60} class="d-inline-block align-text-top" />
            </a>
          </div>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary">SPEAKERS</a></li>
            <li><a href="#" class="nav-link px-2">SCHEDULE</a></li>
            <li><a href="#" class="nav-link px-2">PARTNERS</a></li>
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-success me-2">APPLY NOW</button>
          </div>
        </header>
      </div>
    </nav>
  )
}

export default Navigation