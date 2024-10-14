import axios from 'axios';
const API_GIFHY = 'VH8QIUKBDQ2mBH4vesWnkKKSQ7vrEfbb'//да это плохо и чо?

export const fetchGifsSearch = async(apiURL,query,offset,limit=16)=>{
    try{
        const response = await axios.get(`${apiURL}`, {
            params: {
              api_key: API_GIFHY,
              q: query,
              limit: limit,
              offset: offset,
              rating: 'G',
              lang: 'en'
            }
          });
          return {
            gifData: response.data.data,
            totalCount: response.data.pagination.total_count
          }
    }catch(error){
        console.log("Ошибка при fetching searchGifs:")
        throw error
    }
}