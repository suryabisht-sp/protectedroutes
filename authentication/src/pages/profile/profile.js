import React from 'react'
import { userInfo } from '../../utils/request'

const Profile = () => {
    const userDetails = userInfo();
  return (
      <div>
          <h1>User Details: </h1>
          <h1><span>Id: </span>{userDetails.user.id}</h1>
          <h1><span>Username: </span>{userDetails.user.username}</h1>
          <h1><span>Email: </span>{userDetails.user.email}</h1>
          <h1><span>Email-Verified: </span>{userDetails.user.confirmed === true ? "Yes" : "No"}</h1>
          
     
    </div>
  )
}

export default Profile