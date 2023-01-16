import './App.css';
import {Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom"
import Homepage from './Homepage';
import NotFoundPage from './NotFoundPage';
import PrivateRoute from './PrivateRoute';
// import {AuthPage} from "./AuthPage"
import Login from './pages/login';
import RegisterUser from './pages/register';
import router from './pages/Router/Router_paths';





function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;




    // <Routes>
    //     <Route path='/' element={<Login />}></Route>
    //        <Route path='/register' element={<RegisterUser/>}></Route>
    //       {/* <Route path="/auth/:authType/:id" element={<AuthPage/>} />
    //             <Route path="/auth/:authType" element={<AuthPage/>} /> */}
    //      <Route exact path='/' element={<PrivateRoute><Homepage/></PrivateRoute>}>
    //             <Route exact path='/' element={<Homepage/>}/>
    //             </Route>
    //     {/* <Route path="/" element={<Homepage />}></Route> */}
    //     <Route path='*' element={<NotFoundPage/>}></Route>

    //   </Routes> 