import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import * as GrIcons from "react-icons/gr"

export const NavbarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FaIcons.FaFileInvoice />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill />,
  },
  {
    title: "Staff",
    path: "/staffs",
    icon: <FaIcons.FaUserFriends />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill />,

    subNav: [
      {
        title: "Add staff",
        path: "/addclient",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Staff List",
        path: "/staffs",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
     
    ],
  },
  {
    title: "Project",
    path: "/projects",
    icon: <FaIcons.FaShoppingCart />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill />,

    subNav: [
      {
        title: "Add Project",
        path: "/addproject",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Project List",
        path: "/product/project_list",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },

  
]
