import React from "react"
import NavItem from "./NavItem"
import { GrVmMaintenance } from "react-icons/gr"
import { AiFillFileText } from "react-icons/ai"
import {
  FaFileInvoice,
  FaUserFriends,
  FaShoppingCart,
  FaMoneyCheckAlt,
} from "react-icons/fa"

import { useState } from "react"
import { NavbarData } from "./NavbarData"


const Navbar = ({ navref }) => {
  return (
    <aside ref={navref}>
      <nav className='side-menu'>
        <ul className='nav-ul'>
          {console.log(NavbarData)}
          {NavbarData.map((item, index) => {
            return <NavItem item={item} />
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar
