import React, { useState } from "react"

import { useFormik } from "formik"
import { useEffect } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"

import FormGroup from "../../components/form-group"
import Dashboard from "../dashboard"

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = "Required username"
  } else if (values.username.length > 20) {
    errors.username = "Must be 20 characters or less"
  }

  if (!values.password) {
    errors.password = "Required password"
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less"
  }

  return errors
}

const Login = () => {
  const [dashboard, setDashboard] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      let user = localStorage.getItem("username")
      let pass = localStorage.getItem("Password")

      if (!values.username || !values.password) {
        // setFlag(true);
        console.log("empty")
      } else if (values.username !== user || values.password !== pass) {
        // setFlag(true);
        console.log("invalid details")
      } else {

        console.log("successfully Loged in")
      navigate("/")
        // setFlag(false);


        console.log("successfully Loged in")
      }
    },
  })

  return (
    <div className='login'>
      <div className='login-form'>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup
            id='username'
            name='username'
            type='text'
            labelname='Username'
            changeHandler={formik.handleChange}
            value={formik.values.username}
            touched={formik.touched.username}
            blurHandler={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username ? (
            <div className='error'>{formik.errors.username}</div>
          ) : null}{" "}
          <FormGroup
            id='password'
            name='password'
            type='password'
            labelname='Password'
            changeHandler={formik.handleChange}
            value={formik.values.password}
            touched={formik.touched.password}
            blurHandler={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className='error'>{formik.errors.password}</div>
          ) : null}
          {errorMessage}
          <button className='btn' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
