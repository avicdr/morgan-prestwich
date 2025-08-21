import React, { useEffect, useState } from "react";
import TeamPreview from "./TeamPreview";
import NavPagesHeader from "../NavPagesHeader";
import Footer from "../Footer";
import Navbar from "../Navbar";
import MemberPreview from "./MemberPreview";
function Team() {
  const [data, setData] = useState({
    img: null,
    name: null,
    role: null,
    description: null,
    portfolio: null,
    expertise: null,
    contact: null,
    mail: null
  });

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      <Navbar />
      <NavPagesHeader title={"Our Team"} path={"HOME / OUR TEAM"} />
      <TeamPreview setData={setData} />
      <MemberPreview data={data} />
      <Footer />
    </div>
  );
}

export default Team;
