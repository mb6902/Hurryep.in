import React, { useState } from 'react'
import star from "../../assets/icon/star-18-.png"
import "./Testimonials.css"

export default function Ratting() {
    const [starRate] = useState(5)
  return (
    <div>
        <>
        <p className='ratting'>
            {Array.from ({ length : Math.round(starRate)}, (_,index) => (
               <img src={star}  key = {index} alt='star-yellow' width="15px" height="15px"/>
            ))}
           </p>
        </>
    </div>
  )
}
