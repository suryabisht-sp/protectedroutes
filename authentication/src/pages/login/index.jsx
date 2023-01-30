import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getToken, setToken } from '../../utils/request';
import HeaderAuth from "../../utils/headerAuth"
import github from '../../assests/icons8-github.svg'
import google from '../../assests/icons8-google.svg'

const backendUrl = "http://localhost:1337";

const providersNames = [
  // 'discord',
  // 'facebook',
  'github',
  'google',
  // 'instagram',
  // 'linkedin',
  // 'reddit',
  // 'twitch',
  // 'twitter',
  // 'vk',
  // 'auth0',
];


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
       window.location.reload();
      navigate("/home");
    }, 2000);

  }

  const data = getToken();

  const dc = () => {
    if (data) {
      navigate("/home");
    }
    else {
      navigate("/login")
    }
  }

  useEffect(() => {
    dc();
  }, []);

  return (
    <div className='container'>
      <div className='login-div'>
        <h2>Login</h2>
        <div className='login-handler'>
          <div className='placehold1'>
            {providersNames.map((providerName, i) =>
              <a key={i} href={`${backendUrl}/api/connect/${providerName}`}>
                <div className='gitlogo'>
                  <img className='spanLogo' src={`${providerName}` === "google" ? google : github } alt="github" />
                 </div>
              </a>
              // <li key={providerName}>
              //   <Link to={`/connect/${providerName}`}>
              //   <button providerName={providerName}>{providerName} </button>
                  
              // </Link>
              //  {/* {/* <button className='sub-handle' onClick={()=>{submitHandler({email, password})}}>Submit</button> */}
              //  </li>
            )}
          </div>
          <div className='placehold'>     
            <input placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className='placehold'>                  
            <input placeholder="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className='placehold'>
            
            <button className='sub-handle' onClick={() => { submitHandler({ email, password }) }}>Submit</button>
          </div>
          <Link to="/register" style={{ "textDecoration": "none" }}> <span className='link-handle'>New User? Register here</span> </Link>
          <br />
          <Link to="/forgetpassword" style={{ "textDecoration": "none" }}> <span className='link-handle'>Troubling signing in? Click here</span> </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

