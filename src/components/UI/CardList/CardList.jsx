import React from 'react'
import Loading from '../Loading/Loading.jsx'
import CardGif from '../CardGif/CardGif.jsx'
import './CardList.scss'
const CardList = ({data,isLoading}) => {
  return (
    <div className='cardContainer'>
      {data.map((gif) => (
        <CardGif key={gif.id} gif={gif}/>
      ))}
      {isLoading&&<Loading></Loading>}
    </div>
  )
}

export default CardList