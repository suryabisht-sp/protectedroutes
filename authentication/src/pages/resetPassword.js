import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getToken, setToken } from '../utils/request';
// import { getToken, setToken } from '../../utils/request';

const backendUrl = "";


const ResetPassword = () => {

  const navigate = useNavigate();
    const [password, setPassword] = useState("");
     const [cPassword, setCPassword] = useState("")
  const id = window.location.search;
  const secret= id.substring(6,id.length+1)
  console.log("code secret", secret)
  
  const submitHandler = (props) => {
    if (props.password !== props.cPassword) {
      return alert("password didn't matched");
  }
    const fetchData = () => {
      return axios.post("http://localhost:1337/api/auth/reset-password", {
        code: `${secret}`,
        password: `${props.password}`,
        passwordConfirmation: `${props.cPassword}`,
      })
        .then((response) => {
         console.log("rtesponse", response)
        });
    }
     fetchData();
    // HeaderAuth()
    // setTimeout(() => {
    //   navigate("/login");
    // }, 2000);
  }

  const data = getToken();

  return (
    <div className='container'>
      <div className='login-div'>
        <h2>Reset Password</h2>
        <div className='login-handler'>
          <label><span> Enter your password</span></label>
          <div className='placehold'>
            <input placeholder="enter new password.." type="email" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  </div>
                   <label><span>Confirm your password</span></label>
          <div className='placehold'>
            <input placeholder="confirm password.." type="email" value={cPassword} onChange={(e) => {setCPassword(e.target.value) }} />
          </div>
          <div className='placehold'>
            <button className='sub-handle' onClick={() => { submitHandler({ password, cPassword }) }}>Submit</button>
          </div>
          <Link to="/login" style={{ "textDecoration": "none" }}> <span className='link-handle'>Back to login</span> </Link>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword;

