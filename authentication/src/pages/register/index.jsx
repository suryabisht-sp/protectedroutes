import React from 'react'
import { Link } from 'react-router-dom'

const RegisterUser = () => {
    return (
      <>
            <div style={{width:"350px", height:"380px", marginLeft:"auto", marginRight:"auto", border:"1px solid grey", borderRadius:"5px", padding:"10px"}}>
                <h1>Register</h1>
                <div style={{ padding:"15px", marginLeft:"auto", marginRight:"auto", alignContent:"center"}}>
                    <div style={{  padding:"10px"}}>
                        
                    <input placeholder="Email" type="email" />
               </div>
                    <div style={{  padding:"10px"}}>
                        
                    <input placeholder="password" type="password" />
                </div>
                  
                    <div style={{  padding:"15px"}}>
                        
                    <button>Submit</button>
                  </div>
                <Link to="/">  <span>Already Have an account?</span> </Link>
                                     </div>
    </div>
      </>
  )
}

export default RegisterUser