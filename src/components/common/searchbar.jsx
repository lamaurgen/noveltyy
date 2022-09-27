import React from "react"
import "./common.css"
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"

const SearchBar = props => {
  return (
    <div className='search'>
      <div className='search-emp'>
        <label> {props.title}</label>
        <input type='text' />

        <button type='submit'>
          <icon className='search-icon'>
            <BsIcons.BsSearch />
          </icon>
        </button>
        <Link to={props.link}>
          <AiIcons.AiOutlineUserAdd />

          {props.add}
        </Link>
      </div>
    </div>
  )
}

export default SearchBar
