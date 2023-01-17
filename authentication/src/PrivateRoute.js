import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../src/utils/auth';
import NotFoundPage from './NotFoundPage';
import { getToken } from './utils/request';
     
const PrivateRoute = ({children}) => {
    const data = getToken()
//     console.log(data,"sdata")
    if (!data) {
      return (<Navigate to = '/home'/>)
    }
    else {
    (<Navigate to = '/'/>)
    }
     return (
       children
     )
}
     
export default PrivateRoute;
     
