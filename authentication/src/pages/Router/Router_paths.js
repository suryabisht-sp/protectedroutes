import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../../Homepage';
import Login from '../login';
import RegisterUser from '../register';
import Layout from '../../components/layout';

const router = createBrowserRouter([
  {
      path: "/",
        element:  <Layout />,
    children:[{
        path: "/",
      element: <Homepage />
        
    },
      {
        path: "/",
        element: <Homepage />
    },
    ]
      
    }   ,
    {
      path: "/login",
      element: <Login/>
      
    },
    {
      path: "/register",
      element: <RegisterUser/>
      
     },
   
]);

export default router;