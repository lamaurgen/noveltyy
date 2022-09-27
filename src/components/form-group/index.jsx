import React from "react"

const FormGroup = props => {
  const {
    type,
    id,
    changeHandler,
    blurHandler,
    value,
    name,
    labelname,
    style,
    placeholder,
  } = props

 
  return (
    <div>
      <label className={style}>{labelname}</label>
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
    </div>
  )
}

export default FormGroup
