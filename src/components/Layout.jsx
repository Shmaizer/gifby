import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import  '../styles/wrapper.scss'
export const Layout = ({children,setSearchQuery,fetchGifs}) => {
  return (
    <React.Fragment>
        <Header/>
        <Navbar setSearchQuery={setSearchQuery} fetchGifs={fetchGifs}/>
        <main className='cont_page_wrapper'>
            {children}
        </main>
        <Footer/>
    </React.Fragment>
  )
}
