import React from 'react'
import Logo from '../utils/Images/Brand/logo BCF.png'

const Navigation = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" target="_blank" href="https://bcf.or.id/" rel="noreferrer">
          <div class="d-flex align-items-center">
            <img src={Logo} alt="Logo" height={60} class="d-inline-block align-text-top" />
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Navigation;
