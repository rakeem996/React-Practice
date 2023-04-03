import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {


  return (
    <div>
      <ul className= {props.mode ? "nav nav-tabs bg-white" : "nav nav-tabs bg-dark"}>
        <li className="nav-item">
          <Link className= {props.mode? "nav-link" : "nav-link text-white"} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className= {props.mode? "nav-link" : "nav-link text-white"} to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className={props.mode? "nav-link" : "nav-link text-white"} aria-current="page" to="/contacts">
           Contact
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={props.HandleMode} className={props.mode? "nav-link" : "nav-link text-white"}>Mode</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
