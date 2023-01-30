import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goback = () => {
    setTimeout(() => {
      navigate("/")
    }, 3000);
  }
  window.onload=goback()

  return (
    <div className='container'>
      <h2>
      This page is under construction.Please visit later. 
      </h2>
      <br/>
      <span>You will be redirected to home page automatically within 5 seconds.</span>
    </div>
  )
}

export default NotFoundPage