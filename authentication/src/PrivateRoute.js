import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../src/utils/auth';
import NotFoundPage from './NotFoundPage';
import { getToken } from './utils/request';
     
const PrivateRoute = ({children}) => {
    const data = getToken()
//     console.log(data,"sdata")
    if (data) {
        Navigate("/");
         }
    
     return (
       children
     )
}
     // auth.getToken() ? <Outlet /> : <Navigate to="/auth/login" />;
         //   return auth.getToken() ? <Outlet /> : <NotFoundPage/>;
    
     
export default PrivateRoute;
     
