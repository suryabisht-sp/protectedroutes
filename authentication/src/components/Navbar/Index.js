import React from 'react'
import { getToken, userInfo } from '../../utils/request';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {
  const data = getToken()
  const navigate = useNavigate();
   const localData = userInfo();
 
  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate('/login')
    }, 1500);
    
}

  return (
      <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
                     {/* <img src="/img/en.png" alt="" /> */}
            
            {/* <KeyboardArrowDownIcon /> */}
          </div>
           <div className="item">
            <Link className ="link" to="/"><h1>Logo</h1></Link>
          </div>
                  
           </div>
        <div className="center">
          <Link className ="link" to="/">Testing Strapi</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
                  </div>
                    {!data && <div className='login-section'>
                  <div className="item">
            <Link className ="link" to="/register">Register</Link>
                  </div>
                 <div className="item">
            <Link className ="link" to="/login">Login</Link>
                      </div>
                  </div>}
             </div>
               {data &&  
          <div>    
            <span>Hello {localData.user.username }</span>
                  <button className='btn' onClick={() => { handleLogout() }}>Logout</button>
                  </div>
          }
      </div>
          {/* {open && <Cart/>} */}
              
    </div>
     

  )
}

export default Navbar