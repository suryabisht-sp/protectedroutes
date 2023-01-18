import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getToken, setToken } from '../utils/request';
// import { getToken, setToken } from '../../utils/request';

const backendUrl = "";


const ForgetPass = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");


  const submitHandler = (props) => {
    const data = new FormData();
    data.append("email", props.email)

    const fetchData = () => {
      return axios.post("http://localhost:1337/api/auth/forgot-password", data)
        .then((response) => { console.log("rtesponse", response) });
    }
    fetchData();
    // HeaderAuth()
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  const data = getToken();

  return (
    <div className='container'>
      <div className='login-div'>
        <h2>Forget Password</h2>
        <div className='login-handler'>
          <label><span> Enter your registered email id</span></label>
          <div className='placehold'>
            <input placeholder="Please enter your Email id .." type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className='placehold'>
            <button className='sub-handle' onClick={() => { submitHandler({ email }) }}>Submit</button>
          </div>
          <Link to="/login" style={{ "textDecoration": "none" }}> <span className='link-handle'>Back to login</span> </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgetPass;

