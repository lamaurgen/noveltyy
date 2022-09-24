import React from 'react'
import Box from '../../components/common/box'
import Layout from '../../components/layout'
import './dashboard.css'

import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg"
import * as FcIcons from "react-icons/fc"


const Dashboard = () => {
  return (
    <Layout>
      <div className='dashboard-container'>

        <div className='dashboard-box'>

          <div className='dashboard-title box'>
            <h4>Welcome to Dashboard</h4>
          </div>

          <div className='dashboard-content box stack-top'>
            <div className='box-container'>

              <Box style="inner-box" num='12332' name="Total Orders" icon={<AiIcons.AiOutlineShoppingCart />} />
              <Box style="inner-box" num='12332' name="Total Supplies" icon={<FcIcons.FcSalesPerformance />} />
              <Box style="inner-box" num='12332' name="Total Sales" icon={<CgIcons.CgDollar />} />
              <Box style="inner-box" num='1332' name="Total Clients" icon={<CgIcons.CgDollar />} />
            </div>

          </div>
        </div>


        <div className='dashboard-body'>
          <div className='recent-work  box1'>
            <p> Recent work</p>
            <ul className='work-list'>
              <li>Beauty Hub</li>
              <li>Walling </li>
            </ul>
          </div>
          <div className='chart box1'> <p> Bar chart</p></div>

        </div>




      </div>






    </Layout>
  )
}

export default Dashboard
