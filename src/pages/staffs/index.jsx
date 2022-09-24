import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { BiDetail } from "react-icons/bi"
import { AiFillEdit } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { useRef } from "react"
import { useParams } from "react-router-dom"

import "./employee.css"

import { SearchBar, Button, Layout, Table, Modal } from "../../components"

const Employee = () => {
 
  const [clientId, setClientId] = useState()
  const [showModal, setShowModal] = useState(false)

 



  // const colNames = ['ID', 'Name', 'Phone', 'Email', 'Address', 'Status', 'Action']
  return (
    <Layout>
   
    

      <div className='parent'>
        <div className='searchbox'>
          <SearchBar
            title='All Clients'
            value='Search client'
            add='Add Clients'
            link='addclient'
          />
        </div>

        <div className='child-overlap'>
          <div className='list-container'>
            {/* <Table className="client-table" list={list} colNames={colNames} /> */}

            {/* <Table className="client-table" list={list} /> */}

            {/* <Table className="client-table" list={allclients.map(({ clientName, contactNo, address, representativeName, representativeContactNo }) => {    //to display only username and email
              return {
                ["Client Name"]: clientName,
                contactNo,
                address,
                representativeName,
                representativeContactNo

              }
            })}
            /> */}

            <Table
              className='list-table'
              list={clients?.map(
                ({
                  clientId,
                  clientName,
                  contactNo,
                  address,
                  representiveName,
                  representiveContactNo,
                  addedDate,
                }) => {
                  return {
                    ["Name"]: clientName,
                    ["Contact"]: contactNo,
                    address,
                    ["Representative Name"]: representiveName,
                    ["Representative Contact"]: representiveContactNo,
                    ["Date"]: addedDate,
                    ["Action"]: (
                      <>
                        <Link
                          to={`/clients/${clientId}`}
                          className='details-btn'
                        >
                          <BiDetail />
                        </Link>

                        <Link
                          to={`/clients/editclient/${clientId}`}
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
              )}
            />
          </div>
        </div>
      </div>
     </Layout>
  
  )
}

export default Employee 