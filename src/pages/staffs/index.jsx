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

// import { SearchBar, Button, Layout  } from "../../components"

const Employee = () => {
 
  // const [clientId, setClientId] = useState()

  const[employee, setEmployee] = useState([])

  useEffect( () =>{
    loadEmployees()
  }, [])

 const loadEmployees = async  () => {
    const result =  await axios.get("http://localhost:3000/employee")
    console.log("api called")
    console.log("api",result)
    console.log("data",result.data)
    setEmployee(result.data)
 }

  // const [showModal, setShowModal] = useState(false)

 



  // const colNames = ['ID', 'Name', 'Phone', 'Email', 'Address', 'Status', 'Action']
  return (
    <Layout>
   
    

      <div className='parent'>
        <div className='searchbox'>
          {/* <SearchBar
            title='All Clients'
            value='Search client'
            add='Add Clients'
            link='addclient'
          /> */}
        </div>

        <div className='child-overlap'>
          <div className='list-container'>

            

<div className="client-table">
        
          <table className="table-sort">
            <thead>
              <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Phone</th>
               <th>Email</th>
               <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((emp, index) => (
                <tr>
                  <th>{index +1}</th>
                  <td>{emp.name}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.email}</td>
                  <td>{emp.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
      
      </div>

            {/* <Table
              className='list-table'
              list={employee?.map(
                ({
                  id,
                  name,
                  phone,
                
                 email,
                 address,
                
              
                }) => {
                  return {
                    ["Name"]: name,
                    ["Contact"]: phone,
                    ["Email"]:email,
                    address,
                  
                    ["Action"]: (
                      <>
                        <Link
                          to={`/clients/`}
                          className='details-btn'
                        >
                          <BiDetail />
                        </Link>

                        <Link
                          to={`/clients/editclient/`}
                          className='edit-btn'
                        >
                          <AiFillEdit />
                        </Link>

                        <button
                          className='delete-btn'
                        
                        >
                          <AiOutlineDelete />
                        </button>
                      </>
                    ),
                  
                  }
                }
              )} */}
            
          </div>
        </div>
      </div>
     </Layout>
  
  )
}

export default Employee 