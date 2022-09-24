import React from "react"
import "./common.css"
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"

const Searchbar = props => {
  return (
    <div className='search'>
      <div className='search-client'>
        <label> {props.title}</label>
        <input type='text' />

        <button type='submit'>
          <icon className='search-icon'>
            <BsIcons.BsSearch />{" "}
          </icon>
        </button>
        <a href=''>
          <AiIcons.AiOutlineUserAdd />

          {props.add}
        </a>
      </div>
    </div>
  )
}

export default Searchbar
