import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <InstagramIcon />
        <FacebookIcon />
        <YouTubeIcon />
      </div>
      <p>&copy; 2025 pizzapizzapizza.com</p>
    </div>
  )
}

export default Footer
