import React from 'react'

function Navbar(props) {


  return (
    <div>
      <ul className= {props.mode ? "nav nav-tabs bg-white" : "nav nav-tabs bg-dark"}>
        <li className="nav-item">
          <a className= {props.mode? "nav-link" : "nav-link text-white"} href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className= {props.mode? "nav-link" : "nav-link text-white"} href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className={props.mode? "nav-link" : "nav-link text-white"} aria-current="page" href="/">
           Contact
          </a>
        </li>
        <li className="nav-item">
          <button onClick={props.HandleMode} className={props.mode? "nav-link" : "nav-link text-white"}>Mode</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
