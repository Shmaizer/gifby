import React from 'react'
import './Header.scss'
import logo from '../../assets/svg/logo.svg'
const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="logo" />
    </header>
  )
}

export default Header