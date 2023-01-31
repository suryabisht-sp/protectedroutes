import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar/Index'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Navbar from './components/Navbar/Index'

const DetailFetchPage = () => {
  
  const navigate = useNavigate()
    const id = useParams()
    // console.log("id", id)
     const onsuccess = (data) => {
        console.log("fetch success",data)
    }

 
    const onError = (error) => {
        console.log("encounter error", error)
    }
    const fetchData = () => {
         return axios.get(
     `https://jsonplaceholder.typicode.com/todos/${id.id}`
    )
    }

// data fetch using cutom hooks

    //  const { isLoading, isError, error, data, isFetching, refetch } = useFetchJsonData(onsuccess, onError)
  
    const { isLoading, isError, error, data, isFetching, refetch } = useQuery(["JSON detail",], fetchData, {
         onSuccess: onsuccess,
        onError: onError
        } )
   
  if (error) {
    return <h1>{error}</h1>
  }
  const handleback = () => {
    navigate("/homerq")
  }

  return (
    <div>
          <div className='homepage'>
         <Navbar/>
          {/* <button onClick={() => { handleback() }}>RQ fetch</button> */}
          <h1>Common Page Data Fetch Details </h1>
          <h1>API fetch</h1>
          <div className='product_box'>
            {/* <h1>Title:{data && data.data.title }</h1> */}
                  {isLoading ? <h1>Loading...</h1> :                     
                      <div>
                          <h2>Id:<span> {data.data.id}</span></h2>
                          <h2>Title:<span> {data.data.title}</span></h2>
                          <h2>UserId:<span> {data.data.userId   }</span></h2>
                             <h2>completed:<span> {data.data.completed === true ? "true": "false"}</span></h2>
                          </div>
            //   data && data.data.map((item, index) => {
            //     return (
            //       <div className='box' key={index}>
            //         <h2>Title:<span> {item.title}</span></h2>
            //       </div>
            //     )
            //   })
            }
          </div>
        </div>
    </div>
  )
}

export default DetailFetchPage