import { useState } from "react"
import "./register.css"
import React from "react"

import FormGroup from "../../components/form-group"

import { Link } from "react-router-dom"

function Register() {
  const [form, setForm] = useState({
    username: "",
    emailAddress: "",
    password: "",
    confirmpassword: "",
  })

  const handleFormChange = event => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value

    console.log("Form changed: ", updatedForm)

    // Update state
    setForm(updatedForm)
  }

  const [flag, setFlag] = useState(false)
  const [Login, setLogin] = useState(true)

  function handlelogin(e) {
    e.preventDefault()

    if (
      !form.username ||
      !form.emailAddress ||
      !form.password ||
      !form.confirmpassword
    ) {
      setFlag(true)
      console.log("empty")
    } else {
      setFlag(false)
      localStorage.setItem("username", form.username) //take two parm, 1st one is to store  2nd argument value ie the entered value, 2nd is to take user;s enter value through rehister form and json strinify convert into string
      localStorage.setItem("Email", form.emailAddress)
      localStorage.setItem("Password", form.password)

      console.log("saved in local storage")
    }
  }

  return (
    <div className='register'>
      <div className='register-form'>


            <div className='rows'>
              <form onSubmit={handlelogin} className='form-group'>
                <div className='rows'>
                  <FormGroup
                    labelname='Username'
                    type='text'
                    name='username'
                    className='form__input'
                    value={form.username}
                    changeHandler={handleFormChange}
                  />
                </div>
                <div className='rows'>
                  <FormGroup
                    labelname='Email'
                    type='email'
                    name='emailAddress'
                    className='form__input'
                    value={form.emailAddress}
                    changeHandler={handleFormChange}
                  />
                </div>
                <div className='rows'>
                  <FormGroup
                    labelname='Password'
                    type='password'
                    name='password'
                    value={form.password}
                    className='form__input'
                    changeHandler={handleFormChange}
                  />
                </div>
                <div className='rows'>
                  <FormGroup
                    labelname='Confirm Password'
                    type='password'
                    name='confirmpassword'
                    className='form__input'
                    value={form.confirmpassword}
                    changeHandler={handleFormChange}
                  />
                </div>

                <div className='rows submit row-1'>
                  <button className='btn'>
                    <Link to='/login'>Register</Link>
                  </button>
                </div>
              </form>
            </div>
            <div className='row row-bottom'>
              <p>
                Already a member? <Link to='/login'>Login</Link>
              </p>
            </div>
          </div>
        </div>

  )
}

export default Register
