import React from 'react'
import world from "../../static/world.png"

function ContactSection1() {
  return (
    <div>
        <div className='mx-5' style={{marginTop: "5rem"}}>
            <div className='small' data-aos="fade-right">
                TO GET IN TOUCH
            </div>
            <h1 className='heading-blue' data-aos="fade-right">
                Our Global Headquarters
            </h1>
        </div>
        <img className='w-100 mt-3 mb-5' src={world}/>
    </div>
  )
}

export default ContactSection1