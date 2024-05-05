import React from 'react'
import { Link } from "react-router-dom"
import Background from "../CrazyStuffs/image.png"
import '../css/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Background})` }}>
      <div className='header'>
        <h1> Cat pizza </h1>
        <p> Pizza that made by cats</p>
        <Link to="/menu" >
          <button> Eat or being eaten </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
