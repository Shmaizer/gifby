import React from 'react'
import './CardGif.scss'
const CardGif = ({gif}) => {
  return (
    <div className='cardElementGif' >
      <a className='cardElementGif__url' href={gif.url}></a>
      <img  src={gif.images.fixed_height.url} alt={gif.title} />
      <div className='cardElementGif__title'>{gif.title? gif.title : 'Крутая гифка'}</div>
    </div>
  )
}

export default CardGif