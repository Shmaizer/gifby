import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import MainPage from './pages/MainPage/MainPage.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_GIFHY = 'grsDVuxCgeKNmV5YAcEq2LLLLsDrqtDV'

function App() {
  const [searchQuery, setSearchQuery] = useState('1');
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState([])
  const fetchGifs = async()=>{
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: API_GIFHY,
          q: searchQuery,
          limit: 10,
          offset: 0,
          rating: 'G',
          lang: 'en'
        }
      });
      setData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    } finally {
      setIsLoading(false);
    }
  }
  
  
  
  return (
    <Router>
      <Layout setSearchQuery={setSearchQuery} fetchGifs={fetchGifs}>
        <Routes>
          <Route path="/" element={<MainPage searchQuery={searchQuery}/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
