import React from "react"
import Layout from "../../components/layout"
import "./viewemployee.css"
import { useState } from "react"
import axios from "axios"

import { useEffect } from "react"

import { Link } from "react-router-dom"

import { useParams } from "react-router-dom"

const ViewEmployee = () => {
  const [employeeId, setemployeeId] = useState()

  const [employee, setEmployee] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getSingleEmployee()
  }, [])

  const getSingleEmployee = async () => {
    const employee = await axios.get(`http://localhost:3333/employee/${id}`)

    console.log("data", employee.data)
    setEmployee(employee.data)
  }
  return (
    <>
      <Layout>
        <div className='parent'>
          <div className='title'>
            <p className='add-title'></p>
          </div>

          <div className='child-overlap'>
            <div className='employee-form'>
              <div class='employee'>
                <div class='add-employee'>
                  <p>Employee</p>
                </div>
              </div>

              <div className='containers'>
                <div className='view-main'>
                  <div className='view'>
                    <p className='title'>Name</p>
                    <p>{employee.name}</p>
                  </div>

                  <div className='view'>
                    <p className='title'>Username</p>
                    <p>{employee.username}</p>
                  </div>

                  <div className='view'>
                    <p className='title'>Contact Number</p>
                    <p>{employee.phone}</p>
                  </div>

                  <div className='view'>
                    <p className='title'>Email</p>
                    <p>{employee.email}</p>
                  </div>

                  <div className='view'>
                    <p className='title'>Address</p>
                    <p>{employee.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bottom-detail'>
              <Link className='edit' to={`/editemployee/${id}`}>
                Edit
              </Link>

              <Link className='back' to={"/employee"}>
                Back to List
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ViewEmployee
