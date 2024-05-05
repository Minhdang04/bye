import React, { useState } from 'react'
import logo from "../CrazyStuffs/logo.png"
import { Link } from "react-router-dom"
import '../css/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className="nav">
      <div className='left' id={openLinks ? "open" : "close"}>
        <img src={logo}/>
        <div className='hidden'>
            <Link to="/"> Home</Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
        </div>
      </div>
      <div className='right'>
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
