import React from "react"
import Layout from "../../components/layout"
import axios from "axios"

import { useState } from "react"
import FormGroup from "../../components/form-group"
import "./addemployee.css"

import { useEffect } from "react"
import { useFormik } from "formik"
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Employee from "."
import Modal from "../../components/modal"



const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Required name"
  } else if (values.name.length > 20) {
    errors.name = "Must be 20 characters or less"
  }
  if (!values.username) {
    errors.username = "Required username"
  } else if (values.username.length > 20) {
    errors.username = "Must be 20 characters or less"
  }

  if (!values.phone) {
    errors.phone = "Required phone"
  } else if (values.phone.length > 11) {
    errors.phone = "Must be 10 digit"
  }



  return errors
}

const AddEmployee = () => {

  const [errorMessage, setErrorMessage] = useState("")
  const [status, setStatus] = useState()
  const [popup, setPopUp] = useState()


  const difftoast = () => {
    toast.success("New Employee added", {
      position:"bottom-right"
    })
  }



  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      phone: "",
      email: "",
      address: "",
    },
    validate,
    onSubmit: values => {
      try {
        axios.post(`http://localhost:3333/employee/`, values)


        setStatus(true)
        alert("New employee  added" )

          toast.success("New Employee added", {
            position:"bottom-right"
          })



      } catch (error) {
        console.log("somthing is wrong")
      }


    },
  })
  if (status) {

    return (

      <Employee />
    )
  }

  return (
    <>


      <Layout>
        <div className='parent'>
          <div className='title'>
            <p className='add-title'>Add Employee</p>
          </div>

          <div className='child-overlap'>
            <div className='form-add'>
              <form onSubmit={formik.handleSubmit}>
                <FormGroup
                  id='name'
                  name='name'
                  type='text'
                  labelname='Name:'
                  changeHandler={formik.handleChange}
                  value={formik.values.name}
                  touched={formik.touched.name}
                  blurHandler={formik.handleBlur}
                />

                {formik.errors.name && formik.touched.name ? (
                  <div className='error'>{formik.errors.name}</div>
                ) : null}

                <FormGroup
                  id='username'
                  name='username'
                  type='text'
                  labelname='Userame:'
                  changeHandler={formik.handleChange}
                  value={formik.values.username}
                  touched={formik.touched.username}
                  blurHandler={formik.handleBlur}
                />

                {formik.errors.username && formik.touched.username ? (
                  <div className='error'>{formik.errors.username}</div>
                ) : null}

                <FormGroup
                  id='phone'
                  name='phone'
                  type='tel'
                  labelname='Contact:'
                  changeHandler={formik.handleChange}
                  value={formik.values.phone}
                  touched={formik.touched.phone}
                  blurHandler={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div className='error'>{formik.errors.phone}</div>
                ) : null}

                <FormGroup
                  id='email'
                  name='email'
                  type='text'
                  labelname='Email:'
                  changeHandler={formik.handleChange}
                  value={formik.values.email}
                  touched={formik.touched.email}
                  blurHandler={formik.handleBlur}
                />

                {formik.errors.email && formik.touched.email ? (
                  <div className='error'>{formik.errors.email}</div>
                ) : null}

                <FormGroup
                  id='address'
                  name='address'
                  type='text'
                  labelname='Address:'
                  changeHandler={formik.handleChange}
                  value={formik.values.address}
                  touched={formik.touched.address}
                  blurHandler={formik.handleBlur}
                />
                {formik.errors.address && formik.touched.address ? (
                  <div className='error'>{formik.errors.address}</div>
                ) : null}

                {errorMessage}
                <ToastContainer
        autoClose ={500000}/>

                <button type='submit' className='add-btn' onClick={difftoast} >
                  Add Employee

                </button>

              </form>
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}

export default AddEmployee
