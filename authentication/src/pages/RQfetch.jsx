import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Index'
import Footer from '../components/footer'
import { getToken, userInfo } from '../utils/request'
import Slider from '../components/slider'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useFetchJsonData } from '../hooks/usefetchJSONdata'

const HomepageRq = () => {
    const navigate = useNavigate()
  
    const onsuccess = (data) => {
        console.log("fetch success",data)
    }

 
    const onError = (error) => {
        console.log("encounter error", error)
    }
    const fetchData = () => {
         return axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    )
    }

// data fetch using cutom hooks

    //  const { isLoading, isError, error, data, isFetching, refetch } = useFetchJsonData(onsuccess, onError)
  
    const { isLoading, isError, error, data, isFetching, refetch } = useQuery("Jsondata", fetchData, {
        // cacheTime: 3000
        // staleTime: 5000
        // refetchOnMount: true
        // refetchIntervalInBackground: true
        // refetchOnWindowFocus: true
        // enabled: false,
        onSuccess: onsuccess,
        onError: onError
        // select: (data) => {
        // const title=  data.data.map((item) =>item.title)
        //     return title;
        // }

      } )
   
    // stale time means will request after this time. initial its 0 but we can change it as above
    // refetch on mount, is by default is true
    // refetchonwindowfocus is true by default. works when window is change
    // after 3 sec it will clear the cache and we will see the loader
    // polling is feteching data at regular interval, we use refetchinterval, in caseof not focus use refetchintervalinbackground: true.
    // on button click fetch data  we use enabled: false, this will not fetch data on component mount, and we use refetch to manually trigger the fetch
    // Success and Error Callbacks
    // if we want to transfor data use select and data as arg
    // query by id
    

    

    // const sdata = useQuery("fetchdata", fetchData)
  
    if (isError) {
        return <h1>{error.message}</h1>
    }
   
    const handleback = () => {
        navigate("/")
    }

   
  
  return (
    <div>
        <div className='homepage'>
          <Navbar />
          <button onClick={()=>{handleback()}}>API fetch</button>
              <h1>Common Page.</h1>
              <button onClick={refetch}>Show RQ Data</button>
          <h1>RQ Fetch</h1>
              <div className='product_box'>
              {/* {sdata.isLoading ? <h1>Loading...</h1> :
               sdata.data.data.map((item, index) => {
                 return (
                  <div className='box' key={index}>
                    <h2>Title:<span> {item.title}</span></h2>
                  </div>
                )
                })
              } */}
                    {isLoading|| isFetching ? <h1>Loading...</h1> :
               data && data.data.map((item, index) => {
                 return (
                     <div className='box' key={index}>
                         <Link style={{textDecoration: 'none'}} to={`/homerq/detailfetch/${item.id}`}> 
                    <h2>Title:<span> {item.title}</span></h2></Link>
                  </div>
                )
                })
                  }
                  {/** select transformation */}
                 {/* {isLoading|| isFetching ? <h1>Loading...</h1> :
               data && data.map((item, index) => {
                 return (
                  <div className='box' key={index}>
                    <h2>Title:<span> {item}</span></h2>
                  </div>
                )
                })
              } */}
          </div>

        </div>
    </div>
  )
}

export default HomepageRq