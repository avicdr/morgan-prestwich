import React, { useEffect } from "react";
import NavPagesHeader from "../NavPagesHeader";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Story() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <Navbar/>
      <NavPagesHeader title={"Our Story"} path={"HOME / OUR STORY"} />
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  );
}

export default Story;
