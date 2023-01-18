
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './Hoc/PrivateRoute';
// import {AuthPage} from "./AuthPage"
import Login from './pages/login';
import RegisterUser from './pages/register';
import Layout from './components/layout';
import { getToken } from './utils/request';
import Profile from './pages/profile/profile';
import ConnectPage from "./pages/connectPage";
import ForgetPass from "./pages/forgetPassword";

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
            <Route path='/' element={<Homepage />}>
            <Route path='/home' element={<Homepage />}></Route>
          </Route>
        </Route>}
      <Route path='*' element={<NotFoundPage />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/forgetpassword' element={<ForgetPass />}></Route>
         <Route path='/register' element={<RegisterUser />}></Route>
          <Route exact path="/connect/:providerName/redirect" element={<ConnectPage />}/>
    </Routes>
  );
}

export default App;





