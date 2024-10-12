import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import IteractiveMenu from '../../components/IteractiveMenu/IteractiveMenu'
import CardList from '../../components/UI/CardList/CardList';
const MainPage = () => {
  const API_GIFHY = 'VH8QIUKBDQ2mBH4vesWnkKKSQ7vrEfbb'
  const [offset, setOffset] = useState(0)
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
          limit: 24,
          offset: offset,
          rating: 'G',
          lang: 'en'
        }
      });
      const totalCount = response.data.pagination.total_count; // Общее количество гифок
      console.log(`Total GIFs available: ${totalCount-offset}`);
      setData((pData)=>[...pData,...response.data.data])
      setOffset(pOffset=>pOffset+24)
      console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching GIFs:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (searchQuery) {
      setOffset(0); // Сбрасываем offset при новом запросе
      setData([]); // Сбрасываем предыдущие данные при новом запросе
      fetchGifs();
    }
  }, [searchQuery]);
  
  return (
    <div>
      <IteractiveMenu setSearchQuery={setSearchQuery}/>
      <CardList data={data} isLoading={isLoading}></CardList>
      <div style={{height:20,background: 'red',width:'100%'}}><button onClick={fetchGifs}></button></div>
    </div>
  )
}

export default MainPage