import React from 'react'
import Navbar from '../Navbar/Index'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Slider from '../slider'

const Layout = () => {
  return (
      <div>
          <Navbar/>
      <Outlet />
      <Slider/>
          <Footer/>
          </div>
  )
}

export default Layout