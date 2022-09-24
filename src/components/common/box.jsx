import React from 'react'

const Box = (props) => {
  return (
      <>
          <div >
              <div className={props.style} >
                  <p >{props.num} </p>   <p>{props.icon}</p> 
                   <p>{props.name}</p>
              </div>
         </div>
      
    </>
  )
}

export default Box
