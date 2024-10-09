import React from 'react'
import Button from '../UI/Button/Button.jsx'
import './Navbar.scss'
const Navbar = () => {
  return (
    <nav className='nav'>
      <Button className='btn-one'>GIFs</Button>
      <Button className='btn-two'>Stickers</Button>
      <Button className='btn-three'>Clips</Button>
    </nav>
  )
}

export default Navbar