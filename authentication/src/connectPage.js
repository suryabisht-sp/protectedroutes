    

    import axios from 'axios'
import React, { useEffect } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
    
const backendUrl = "http://localhost:1337"

const ConnectPage = () => {
    const params = useParams()
    console.log("parasm",  params.provider)
      const location = useLocation();
 console.log("location search", location)
    // const {
    //     match: { params: { provider } },
    //     location: { search }, }
 const redirectUser = path => {
        <Navigate to={path} />;
       };
    
    useEffect(() => {
  fetch(`${backendUrl}/api/auth/github/callback${location.search}`)
     .then(res => {
        if (res.status !== 200) {
          alert("error")
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {console.log("fetched data", res)})

// console.log("here is login auth git")
    //     const requestURL =  axios.get(`http://localhost:1337/api/auth/${params.provider}`).then((res)=>console.log(res));
    //  console.log("request", requestURL)
        //  request(requestURL, { method: 'GET' })
        //    .then(response => {
        //      auth.setToken(response.jwt, true);
        //      auth.setUserInfo(response.user, true);
        //      redirectUser('/');
        //    })
        //    .catch(err => {
        //      console.log(err.response.payload);
        //      redirectUser('/auth/login');
        //    });
       })


      return (
        <div>ConnectPage</div>
      )
    }
    
    export default ConnectPage

//