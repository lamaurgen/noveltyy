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

              <Box style="inner-box" num='12332' name="Total Employee" icon={<AiIcons.AiOutlineShoppingCart />} />
              <Box style="inner-box" num='12332' name="Total Leave" icon={<FcIcons.FcSalesPerformance />} />
              <Box style="inner-box" num='12332' name="Total Project" icon={<CgIcons.CgDollar />} />

            </div>

          </div>
        </div>


        <div className='dashboard-body'>
          <div className='recent-work  box1'>
            <p> Recent Project</p>
            <ul className='work-list'>
              <li>Novelty</li>
              <li>Walling </li>
              <li>Red Furniture </li>
              <li>Ncell </li>
              <li>Apple</li>
            </ul>
          </div>
          <div className='chart box1'> <p> Bar chart</p>
          <img src="./public/bar.jpg" alt="bar" />
          </div>

        </div>




      </div>






    </Layout>
  )
}

export default Dashboard
