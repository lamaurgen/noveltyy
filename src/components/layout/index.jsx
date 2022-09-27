import React from "react"
import "./layout.css"
import Navbar from "./Navbar"

import { useRef } from "react"
import { Outlet } from "react-router-dom"
const Layout = props => {
  const navref = useRef()

  const mainref = useRef()
  const hamburgerRef = useRef()

  const showSidebar = () => {
    navref.current.classList.toggle("responsive-nav")
    mainref.current.classList.toggle("responsive-main")
  }
  return (
    <div>
      <div className='top-nav'>
        <h1 className='cms'>Employee Management System</h1>

        <a href='#'>Logout</a>
      </div>

      <div className='page-wrapper'>
        <Navbar navref={navref} />

        {/* body part of different page which is passed dynamically in same layout */}
        <main ref={mainref}> {props.children}</main>
      </div>
    </div>
  )
}

export default Layout
