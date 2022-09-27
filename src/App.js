import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import Employee from "./pages/staffs"
import AddEmployee from "./pages/staffs/addEmployee"
import ViewEmployee from "./pages/staffs/viewEmployee"
import EditEmployee from "./pages/staffs/editemployee"
import Register from "./pages/register"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/viewemployee/:id' element={<ViewEmployee />} />
          <Route path='/editemployee/:id' element={<EditEmployee />} />
          <Route path='/addemployee' element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
