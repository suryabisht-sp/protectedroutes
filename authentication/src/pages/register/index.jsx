import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getToken, setToken } from '../../utils/request';

const RegisterUser = () => {

const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
 const [username, setUsername] = useState(""); 

const submitHandler = (props) => {
  
    const data = new FormData();
    data.append("email", props.email)
  data.append("password", props.password)
    data.append("username", props.username)
      
    const fetchData = () => {
      return axios.post("http://localhost:1337/api/auth/local/register", data)
        .then((response) => { localStorage.setItem("user", JSON.stringify(response.data)); setToken(response.data.jwt) });
  }
    fetchData(); 
    // HeaderAuth()
    setTimeout(() => {
      navigate("/home");   

    }, 2000);

  }

  const data = getToken();

  const dc = () => {
    if (data) {
      navigate("/home");
    }
    else {
      navigate("/register")
    }
  }

  useEffect(() => {
  dc();
   },[]);


    return (
      <>
            <div className="login-div">
                <h2>Register</h2>
                <div className='login-handler'>
                          <div className='placehold'>
                        
                    <input placeholder="Username" type="email" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
               </div>        
            <div className='placehold'>
                        
                    <input placeholder="Email" type="email" value={email}onChange={(e)=>{setEmail(e.target.value)}}/>
               </div>
                    <div className='placehold'>
                        
                    <input placeholder="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                  
                    <div className='placehold'>
                        
              <button className='sub-handle' onClick={() => {
                submitHandler({email, password, username})
                    }}> Submit</button>
                  </div>
                <Link to="/login" style={{"textDecoration": "none"}}>  <span className='link-handle'>Already Have an account?</span> </Link>
                                     </div>
    </div>
      </>
  )
}

export default RegisterUser