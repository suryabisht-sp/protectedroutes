import React from 'react'
import Navbar from '../components/Navbar/Index'
import Footer from '../components/footer'
import { getToken, userInfo } from '../utils/request'
import Slider from '../components/slider'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const token = getToken()
  const info = userInfo()
  return (
    
    <div>
      {token ?
        <div className='profile'>
          <h1 className='admin-hello'>Hello {info.user.username}. Welcome back! </h1 >
          <Link to="/profile">
          <button className='btn-profile'>Profile</button>
          </Link>
        </div>  :
        <div className='homepage'>
          <Navbar />
          <h1>Your are viewing this page as Guest User.
          </h1>
        </div>}
    </div> 
  )
}

export default Homepage