
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import Homepage from './Homepage';
import NotFoundPage from './NotFoundPage';
import PrivateRoute from './PrivateRoute';
// import {AuthPage} from "./AuthPage"
import Login from './pages/login';
import RegisterUser from './pages/register';
import router from './pages/Router/Router_paths';
import Layout from './components/layout';
import { getToken } from './utils/request';
import Profile from './pages/profile/profile';
import ConnectPage from "./connectPage";
import LoginRedirect from "./loginRedirect";
import Trying from "./pages/login/trying";
import Home from "./pages/login/trying";




// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router}/>
//     </div>
//   );
// }
// export default App;



function App() {
  const token = getToken()
  return (
    <Routes>
      {token ?
        <Route exact path='/' element={<PrivateRoute><Layout/></PrivateRoute>}>
          <Route exact path='/' element={<Homepage />}>
            <Route exact path='/home' element={<Homepage />} />
          </Route>
             <Route exact path='/profile' element={<Profile />} />
        </Route> :
        <Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path='/' element={<Homepage />}>
            <Route path='/home' element={<Homepage />}></Route>
          </Route>
        </Route>}
          <Route path='*' element={<NotFoundPage />}></Route>
      {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path='/login' element={<Home />}></Route>
      <Route path='/register' element={<RegisterUser />}></Route>
      {/* <Route path="/connect/:provider" element={<ConnectPage />} /> */}
       <Route exact path="/connect/:providerName/redirect" element={<LoginRedirect/>} />
    </Routes>
    


  );
}

export default App;





