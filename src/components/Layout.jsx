import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import  '../styles/wrapper.scss'
export const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Header/>
        <Navbar/>
        <main className='cont_page_wrapper'>
            {children}
        </main>
        <Footer/>
    </React.Fragment>
  )
}
