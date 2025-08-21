import React from "react";
import ContactCard from "./ContactCard";

function ContactSection2() {
  return (
    <div className="d-flex flex-wrap mx-auto" style={{width: "90%", marginBottom: "5rem"}}>
      <ContactCard
        name={"Morgan Prestwich (HQ) "}
        address={
          "Third Floor Offices Reigate Place43 London Road Reigate, Surrey RH29PW UK"
        }
        contact={" +44 (0) 1737 226644"}
      />
      <ContactCard
        name={"Morgan Prestwich (Boston) "}
        address={
          "101 Federal St Suite 1900Boston Massachusetts 02110 USA"
        }
        contact={" +1 (857) 343 8096"}
      />
      <ContactCard
        name={"Morgan Prestwich (Florida) "}
        address={
          "Florida Team is virtual"
        }
        contact={" 156-677-124-442-2887"}
      />
      <ContactCard
        name={"Morgan Prestwich (Italy) "}
        address={
            "address TBC"
        }
        contact={"156-677-124-442-2887"}
      />
        <ContactCard
          name={"Morgan Prestwich (Ireland) "}
          address={
            "Number 9 Pearse StreetKinsaleCounty Cork, P17 AH66Ireland"
          }
          contact={"+44 (0) 208 1446778"}
        />
    </div>
  );
}

export default ContactSection2;
