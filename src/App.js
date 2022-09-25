
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Employee from './pages/staffs';

// import LogIn from './components/forms/LogIn';
function App() {
  return (
    <>
     
       <BrowserRouter>
       <Routes>
       <Route path='/login' element={<Login />} />
       <Route path='/' element={<Dashboard />} />
       <Route path='/employee' element={<Employee/>} />
       </Routes>
       </BrowserRouter>

       
      
   
        
      
    </>
  );
}

export default App;
