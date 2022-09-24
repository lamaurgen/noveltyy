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
// import silicon from './silicon.png';

const Navbar = ({ navref }) => {
  return (
    <aside ref={navref}>
      <nav className='side-menu'>
        
        <ul className='nav-ul'>
          {/* <NavItem link ="/"  icon = {<FaFileInvoice ></FaFileInvoice>} navitem = "Dashboard"></NavItem>
      <NavItem link ="/client" icon= {< FaUserFriends></ FaUserFriends>} navitem = "Clients"></NavItem>
      <NavItem link ="/product" icon= {< FaShoppingCart></ FaShoppingCart>} navitem = "Product"></NavItem> 
      <NavItem link ="/invoice" icon= {<FaFileInvoice></FaFileInvoice>} navitem = "Invoice"></NavItem>
      <NavItem  link ="/report"  icon = {<AiFillFileText></AiFillFileText>}  navitem= "Report"></NavItem>
      <NavItem  link ="/expense" icon = {<FaMoneyCheckAlt></FaMoneyCheckAlt>} navitem = "Expense"></NavItem>
      <NavItem link ="/amc"  icon = {<GrVmMaintenance></GrVmMaintenance>} navitem = "Amc"></NavItem> */}
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
