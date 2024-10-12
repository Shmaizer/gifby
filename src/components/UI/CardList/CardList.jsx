import React from 'react'
import Loading from '../Loading/Loading.jsx'
import CardGif from '../CardGif/CardGif.jsx'
import './CardList.scss'
import Button from '../Button/Button.jsx'
const CardList = ({data}) => {
  return (
    <div className='cardContainer'>
      {data.map((gif,index) => (
        <CardGif key={`${gif.id}+${index}`} gif={gif}/>
      ))}
    </div>
  )
}

export default CardList