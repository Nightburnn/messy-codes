import React from 'react'
import './Offer.css'

const Offer = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only For Limited Time</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
           <img src="https://www.freeiconspng.com/uploads/model-png-sitemodel-png-by-16.png"  alt="Model Png Sitemodel png by" />
        </div>
    </div>
  )
}

export default Offer