import React, { useState } from 'react'
import './IteractiveMenu.scss'
import inpLogo from '../../assets/svg/icons8-search-256.svg'
import Button from '../../components/UI/Button/Button'
const IteractiveMenu = ({setSearchQuery}) => {
    const [query,setQuery] = useState('')
    const handleSearchChange = (event) => {
    setQuery(event.target.value);
    };
    const handleSearchSubmit = () =>{
    setSearchQuery(query)
  }
  return (
    <div className='inter'>
        <div className='inter_inputCont'>
        <input 
          className='inter_inputCont__input'
          placeholder='Seacth all the GIFs'
          value={query}
          onChange={handleSearchChange}
          >
          </input>
        <button 
          className='inter_inputCont__btn' 
          onClick={handleSearchSubmit}
        >
          <img src={inpLogo}/>
        </button>
      </div>
      <div className='inter_butCont'>
        <Button className='btn-one'>GIFs</Button>
        <Button className='btn-two'>Stickers</Button>
        <Button className='btn-three'>Clips</Button>
      </div>
    </div>
  )
}

export default IteractiveMenu