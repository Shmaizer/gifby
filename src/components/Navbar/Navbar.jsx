import React from 'react'
import Button from '../UI/Button/Button.jsx'
import './Navbar.scss'
import Input from '../UI/Input/Input.jsx'
import inpLogo from '../../assets/svg/icons8-search-256.svg'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_inputCont'>
        <input className='nav_inputCont__input'></input>
        <button className='nav_inputCont__btn'>
          <img src={inpLogo}/>
        </button>
      </div>
      <div className='nav_butCont'>
        <Button className='btn-one'>GIFs</Button>
        <Button className='btn-two'>Stickers</Button>
        <Button className='btn-three'>Clips</Button>
      </div>
    </nav>
  )
}

export default Navbar