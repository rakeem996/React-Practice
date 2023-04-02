import React,{useState} from 'react'

function Navbar() {

  const [mode,setMode] = useState(0)

  function HandleMode(){
    setMode(!mode);
  }

  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <a className="nav-link text-white" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="/">
           Contact
          </a>
        </li>
        <li className="nav-item">
          <button onClick={HandleMode} className='nav-link text-white'>Mode</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
