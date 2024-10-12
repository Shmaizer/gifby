import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import IteractiveMenu from '../../components/IteractiveMenu/IteractiveMenu'
import CardList from '../../components/UI/CardList/CardList';
import Button from '../../components/UI/Button/Button';
import Loading from '../../components/UI/Loading/Loading';
const MainPage = () => {
  const API_GIFHY = 'VH8QIUKBDQ2mBH4vesWnkKKSQ7vrEfbb'
  const [offset, setOffset] = useState(0)
  const [totalCount,setTotalCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const [data,setData] = useState([])
  const fetchGifs = async()=>{
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: API_GIFHY,
          q: searchQuery,
          limit: 16,
          offset: offset,
          rating: 'G',
          lang: 'en'
        }
      });
      console.log(data.length+" - " +totalCount)
      setTotalCount(response.data.pagination.total_count)
      setData((pData)=>[...pData,...response.data.data])
      setOffset(pOffset=>pOffset+16)
      console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching GIFs:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (searchQuery) {
      setOffset(0)
      setData([])
      fetchGifs()
    }
  }, [searchQuery]);
  
  return (
    <div>
      <IteractiveMenu setSearchQuery={setSearchQuery}/>
      <CardList data={data} isLoading={isLoading} fetchGifs={fetchGifs} totalCount={totalCount}></CardList>
      {isLoading?
      (<Loading/>):
      data.length < totalCount&&(<Button style={{ margin: '15px auto', display: 'flex' }} onClick={fetchGifs}>MORE</Button>)
      }
    </div>
  )
}

export default MainPage