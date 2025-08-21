import React, { useEffect } from 'react'
import CandidatesSec1 from './CandidatesSec1'
import CandidatesSec2 from './CandidatesSec2'
import NavPagesHeader from '../NavPagesHeader'
import Navbar from "../Navbar"
import Footer from "../Footer"

function Candidates() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
        <Navbar/>
        <NavPagesHeader title={"Candidates"} path={"HOME / CANDIDATES"}/>
        <CandidatesSec1/>
        <CandidatesSec2/>
        <Footer/>
    </div>
  )
}

export default Candidates