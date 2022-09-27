import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import { NavbarData } from "./NavbarData"

const NavItem = ({ item }) => {
  const [dropdownmenu, setDropDownMenu] = useState(false)

  const showSubnav = () => setDropDownMenu(!dropdownmenu)
  // console.log(item);

  return (
    <li>
      <NavLink
        to={item.path}
        
      >
        <h1 className='icon'>
          {item.icon} {item.title}
        </h1>
        
      </NavLink>
     
    </li>
  )
}

export default NavItem
