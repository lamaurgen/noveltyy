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
        style={({ isActive }) => ({
          color: isActive ? "#1d36af" : "black",
        })}
      >
        <h1 className='icon'>{item.icon} </h1> {item.title}
        {/* item ma subnav cha bhani matra icon disply garcha by using short circuit */}
        {item.subNav && (
          <button onClick={showSubnav} className='dropdown-icon'>
            {dropdownmenu ? item.iconClosed : item.iconOpened}
          </button>
        )}
      </NavLink>
      {/* //style={dropdownmenu ? "hide" : "show"} */}

      {item.subNav && (
        <div className={`dropdown ${dropdownmenu ? "show" : "hide"}`}>
          {/* {item.subNav?.map((subNavLink, index) => {
            return (
              <>
                <div>
                  <NavLink to={subNavLink.path} key={index}>
                    <p className='dropdown'> {subNavLink.title}</p>
                  </NavLink>
                </div>
              </>
            )
          })} */}
        </div>
      )}
    </li>
  )
}

export default NavItem
