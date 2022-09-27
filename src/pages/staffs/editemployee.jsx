import React from "react"
import Layout from "../../components/layout"
import axios from "axios"

import { useState } from "react"
import FormGroup from "../../components/form-group"
import "./addemployee.css"
import { useParams } from "react-router-dom"

import { useEffect } from "react"
import { useFormik } from "formik"
import Employee from "."

const validate = values => {
  const errors = {}

 

  return errors
}

const EditEmployee = () => {
  const [employee, setEmployee] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [status, setStatus] = useState()
  const { id } = useParams()
  useEffect(() => {
    const getSingleEmployee = async () => {
      const employee = await axios.get(`http://localhost:3333/employee/${id}`)
      setEmployee(employee.data)
    }
    getSingleEmployee()
  }, [id])
  const initialValues = {
    ...employee,
  }

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validate,
    onSubmit: values => {
      try {
        axios.patch(`http://localhost:3333/employee/${id}`, values)
        console.log("updated employee")
        setStatus(true)
        alert("Employee info updated successfully" )
      } catch (error) {
        console.log("somthing is wrong")
      }
    },
  })
  if (status) {
    return <Employee />
  }

  return (
    <>
      <Layout>
        <div className='parent'>
          <div className='title'>
            <p className='add-title'>Update Employee</p>
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

                <button type='submit' className='add-btn'>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditEmployee
