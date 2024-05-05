import React from 'react'
import Left from '../CrazyStuffs/left.png'
import '../css/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='left' style={{ backgroundImage: `url(${Left})` }}></div>
        <div className='right'>
            <h1>Contact</h1>
            <form id='form' action="https://api.web3forms.com/submit" method='POST'>
                <input type="hidden" name="access_key" value="536ec78e-0a63-4dfa-94ec-7f756b8ceb43"/>
                <label htmlFor='name'>Full name</label>
                <input name="name" placeholder='Your name is...' type="text" required/>
                <label htmlFor='email'>Email</label>
                <input name="email" placeholder='Your email...' type="email" required/>
                <label htmlFor='message'>What you want to tell us</label>
                <textarea rows="10" placeholder='Message' name='message' required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
