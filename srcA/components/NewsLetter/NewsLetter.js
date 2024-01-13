import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Offers Via Mail</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='johndoe@gmail.com'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter