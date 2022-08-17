import React from "react"
import { NavLink, withRouter } from "react-router-dom"

// function toggleMode(){

// console.log('this');
// }

function _AppHeader() {
  return (
    <section className='app-header container margin flex space-between align-center'>
      <div className='logo'>
        <img
          src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/368/7693601368_4c33313f-8cd4-4cbe-8e26-034beaeadcae.png?cb=1660560699'
          alt=''
        />
      </div>
      <nav className='header-nav flex space-between'>
        <NavLink exact className='home nav-btn' to='/'>
          <img
            title='Home'
            src='https://cdn-icons.flaticon.com/png/512/2544/premium/2544087.png?token=exp=1660563231~hmac=34eb5c6343d2af447b9a486ef5118bd2'
            alt=''
          />
        </NavLink>
        <NavLink className='contacts nav-btn' to='/contact'>
          <img
            title='Contacts'
            src='https://cdn-icons-png.flaticon.com/512/3771/3771518.png'
            alt=''
          />
        </NavLink>
        <NavLink className='stats nav-btn' to='/statistics'>
          <img
            title='Stats'
            src='https://cdn-icons.flaticon.com/png/512/548/premium/548174.png?token=exp=1660563320~hmac=7f75a9424483df1c72e94131bbe911b0'
            alt=''
          />
        </NavLink>
        {/* <button onClick={toggleMode} className='drk-mode nav-btn'> Dark mode</button> */}
      </nav>
    </section>
  )
}

export const AppHeader = withRouter(_AppHeader)
