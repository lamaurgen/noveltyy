import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { BiDetail } from "react-icons/bi"
import { AiFillEdit } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { useRef } from "react"
import { useParams } from "react-router-dom"
import Layout from "../../components/layout"


import "./employee.css"
import SearchBar from "../../components/common/searchbar"
import Modal from "../../components/modal"
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Employee = () => {
  

  const [employee, setEmployee] = useState([])

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = async () => {
    const result = await axios.get("http://localhost:3333/employee/")

    console.log("api", result)
    console.log("data", result.data)
    setEmployee(result.data)
  }
  const handleDelete = async id => {
    await axios.delete(`http://localhost:3333/employee/${id}`)


    toast.info(" Employee deleted", {
      position:"bottom-right"
    })
    var newEmployee = employee.filter(item => {
      return item.id !== id
    })
    setEmployee(newEmployee)
  }

  
  return (
    <Layout>

      <div className='parent'>
        <div className='searchbox'>
          <SearchBar
            title='All Employee'
            value='Search employee'
            add='Add Employee'
            link='/addemployee'
          />
        </div>

        <div className='child-overlap'>
          <div className='list-container'>
            <div className='empolyee-table'>
              <table className='table-sort'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((emp, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{emp.name}</td>
                      <td>{emp.phone}</td>
                      <td>{emp.email}</td>
                      <td>{emp.address}</td>
                      <td>
                        <Link
                          to={`/viewemployee/${emp.id}`}
                          className='details-btn'
                        >
                          <BiDetail />
                        </Link>

                        <Link
                          to={`/editemployee/${emp.id}`}
                          className='edit-btn'
                        >
                          <AiFillEdit />
                        </Link>

                        <button
                          className='delete-btn'
                          onClick={() => handleDelete(emp.id)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
      <ToastContainer
        autoClose ={500000}/>
    </Layout>
  )
}

export default Employee
