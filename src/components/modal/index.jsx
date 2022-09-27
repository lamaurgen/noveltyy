import React from "react"
import "./modal.css"
import { useRef } from "react"
import { useState } from "react"


const Modal = ({


  id,

  msg,
}) => {
  const modalcancelRef = useRef()
  const cancelHandler = () => {
    modalcancelRef.current.classList.toggle("modal")
  }
  const [message, setMessage] = useState({})

  return (
    <>
      <div className='delete-modal__contianer modal' ref={modalcancelRef}>
        <div className='delete-popup'>
          <p>!!</p>
          <p className='confirm'> {msg}?</p>

        </div>
      </div>
    </>
  )
}


export default
Modal
