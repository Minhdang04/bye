import React from 'react'
import Banner from '../CrazyStuffs/banner.png'
import '../css/About.css'

function About() {
  return (
    <div className='about'>
      <div className='top' style={{ backgroundImage: `url(${Banner})` }}></div>
      <div className='bottom'>
        <h1> About</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id justo felis. Nunc ultricies lacus sit amet dui dignissim scelerisque. Etiam tempor, est id scelerisque varius, dui est bibendum nulla, ac ultricies nunc velit fringilla tellus. Donec quis odio commodo, consectetur ex id, vehicula erat. Duis faucibus erat ac pellentesque dictum. Vestibulum urna neque, elementum vehicula dolor id, eleifend feugiat justo. Suspendisse tristique fermentum massa, id maximus tellus volutpat at. Aliquam pulvinar ultricies metus, et sollicitudin metus interdum sed. Aliquam sit amet mollis diam. Sed nulla lectus, dapibus nec tortor sed, efficitur rutrum augue. Duis tempor mi at ante maximus, sit amet lobortis mauris rhoncus. Nullam blandit in augue eget tempor.
        </p>
      </div>
    </div>
  )
}

export default About
