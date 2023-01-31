import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Index'
import Footer from '../components/footer'
import { getToken, userInfo } from '../utils/request'
import Slider from '../components/slider'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'

const Homepage = () => {
  const token = getToken()
  const info = userInfo()
  const [Loading, setLoading] = useState(true);
  const [fdata, setFData] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setFData(response.data), setLoading(false))
      .catch((error) => {
        console.log("error")
        setError(error.message);
        setLoading(false)      
      })
  }, [])
  // console.log("json", fdata)

  // console.log("errror", error)
  if (error) {
    return <h1>{error}</h1>
  }
  const handleback = () => {
    navigate("/homerq")
  }

  return (
    <div>
      {token ?
        <div className='profile'>
          <h1 className='admin-hello'>Hello {info.user.username}. Welcome back! </h1 >
          <Link to="/profile">
            <button className='btn-profile'>Profile</button>
          </Link>
        </div> :
        <div className='homepage'>
          <Navbar />
          <button onClick={() => { handleback() }}>RQ fetch</button>
          <h1>Your are viewing this page as Guest User.  </h1>
          <h1>API fetch</h1>
          <div className='product_box'>
            {/* <h1>Title:{data && data.data.title }</h1> */}
            {Loading ? <h1>Loading...</h1> :
              fdata && fdata.map((item, index) => {
                return (
                  <div className='box' key={index}>
                    <h2>Title:<span> {item.title}</span></h2>
                  </div>
                )
              })
            }
          </div>
        </div>}
    </div>
  )
}

export default Homepage