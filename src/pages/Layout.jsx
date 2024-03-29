// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Popup from '../components/Popup/Popup'

 const Layout = () => {
  const [orderPopup,setOrderPopup]=useState(false)
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup)
  }
  return (
    <>
     <Navbar handleOrderPopup={handleOrderPopup}/>
     <Outlet/>
     <Footer/>
     <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Layout;