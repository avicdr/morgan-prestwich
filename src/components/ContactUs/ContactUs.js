import React, { useEffect } from 'react'
import NavPagesHeader from '../NavPagesHeader'
import Navbar from "../Navbar"
import Footer from "../Footer"
import ContactSection1 from './ContactSection1'
import ContactSection2 from './ContactSection2'
import ContactForm from './ContactForm'

function ContactUs() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
        <Navbar/>
        <NavPagesHeader title={"Contact Us"} path={"HOME / CONTACT US"}/>
        <ContactSection1/>
        <ContactSection2/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default ContactUs