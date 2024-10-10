import React, { useState } from 'react'
import Button from '../UI/Button/Button.jsx'
import './Navbar.scss'
import inpLogo from '../../assets/svg/icons8-search-256.svg'

const Navbar = ({setSearchQuery,fetchGifs}) => {
  const [query,setQuery] = useState('')
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSearchSubmit = () =>{
    setSearchQuery(query)
    fetchGifs()
  }
  return (
    <nav className='nav'>
      <div className='nav_inputCont'>
        <input 
          className='nav_inputCont__input'
          placeholder='Seacth all the GIFs'
          value={query}
          onChange={handleSearchChange}
          >
          </input>
        <button 
          className='nav_inputCont__btn' 
          onClick={handleSearchSubmit}
        >
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