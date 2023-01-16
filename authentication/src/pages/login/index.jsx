import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getToken, setToken } from '../../utils/request';
import HeaderAuth from "../../utils/headerAuth"
const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const submitHandler = (props) => {
  
    const data = new FormData();
    data.append("identifier", props.email)
    data.append("password", props.password)
      
    const fetchData = () => {
      return axios.post("http://localhost:1337/api/auth/local", data)
        .then((response) => { localStorage.setItem("user", JSON.stringify(response.data)); setToken(response.data.jwt) });
  }
    fetchData(); 
    // HeaderAuth()
    setTimeout(() => {
      navigate("/");   
      
    }, 2000);

  }
  const data = getToken()

  const dc = () => {
  if (data) {
       navigate("/");    }
}


  useEffect(() => {
   
    dc();
    
  },);

  return (
      <>
            <div style={{width:"350px", height:"380px", marginLeft:"auto", marginRight:"auto", border:"1px solid grey", borderRadius:"5px", padding:"10px"}}>
                <h1>Login</h1>
                <div style={{padding:"15px", marginTop:"10px",  marginLeft:"aRegisteruto", marginRight:"auto", alignContent:"center"}}>
                    <div style={{  padding:"10px"}}>
                        
                    <input placeholder="Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
               </div>
                    <div style={{  padding:"10px"}}>
                        
                    <input placeholder="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                  
                    <div style={{  padding:"15px"}}>
                        
                    <button onClick={()=>{submitHandler({email, password})}}>Submit</button>
                    </div>
            <Link to="/register"> <span>New User? Register here</span> </Link>
          </div>
    </div>
      </>
  )
}

export default Login