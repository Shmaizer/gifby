import React, { useEffect, useState } from 'react';
import IteractiveMenu from '../../components/IteractiveMenu/IteractiveMenu'
import CardList from '../../components/UI/CardList/CardList';
import Button from '../../components/UI/Button/Button';
import Loading from '../../components/UI/Loading/Loading';
import axios from 'axios';

const MainPage = () => {
  const apiUrls = {
    gifs: 'https://api.giphy.com/v1/gifs/search',
    sticker: 'https://api.giphy.com/v1/stickers/search'
  };
  const API_GIFHY = 'nGUOaEyMJoOVSCOr0K0aBxNbz2nwdQxG'
  const [offset, setOffset] = useState(0)
  const [totalCount,setTotalCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeBtn,setActiveBtn] = useState('gifs')
  const [isLoading,setIsLoading] = useState(false)
  const [data,setData] = useState([])
  
  const fetchGifs = async(controller)=>{
    try {
      setIsLoading(true);
      console.log(`Выбранная ссылка ${apiUrls[activeBtn]}`)
      const response = await axios.get(apiUrls[activeBtn], {
        params: {
          api_key: API_GIFHY,
          q: searchQuery,
          limit: 16,
          offset: offset,
          rating: 'G',
          lang: 'en'
        },
        signal: controller.signal
      })
      setTotalCount(response.data.pagination.total_count)
      setData((pData)=>[...pData,...response.data.data])
      setOffset(pOffset=>pOffset+16)
      //console.log("dataLength:"+data.length+" - totalCount:" +totalCount)
      //console.log(response.data)
    } catch (error) {
      console.error('Error fetching GIFs:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    const controller = new AbortController()
    if(searchQuery){
      setOffset(0)
      setData([])
      fetchGifs(controller)
    }
    return()=>{
      controller.abort()
    }
  }, [searchQuery])
  useEffect(()=>{
    setData([])
    setSearchQuery('')
  },[activeBtn])

  return (
    <div>
      <IteractiveMenu setSearchQuery={setSearchQuery} activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
      <CardList data={data}></CardList>
      {isLoading?
      (<Loading/>):
      data.length>0&&data.length < totalCount&&(<Button style={{ margin: '15px auto', display: 'flex' }} onClick={fetchGifs}>MORE</Button>)
      }
    </div>
  )
}

export default MainPage