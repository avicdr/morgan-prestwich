import React, { useEffect } from 'react'
import NavPagesHeader from "../NavPagesHeader"
import Navbar from '../Navbar'
import Footer from '../Footer'
import SolutionSec1 from './SolutionSec1'

function Solution() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
        <Navbar/>
        <NavPagesHeader title={"Expertise"} path={"HOME / SOLUTIONS"}/>
        <SolutionSec1/>
        <Footer/>
    </div>
  )
}

export default Solution