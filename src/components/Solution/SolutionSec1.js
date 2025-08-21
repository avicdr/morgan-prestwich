import React from "react";
import SolutionAccordion from "./SolutionAccordion";

function SolutionSec1() {
  return (
    <div style={{marginTop: "5rem", overflow: "hidden"}}>
      <SolutionAccordion
        title={"Advisory"}
        content={`The Advisory Practice is led by Greg Bell, supported by Sean Morgan-Jones, whose combined experience delivers unique insights into the opportunities and pitfalls associated with building operations beyond the comfort of company Headquarters. They offer practical advice, based on real-world experience on how best to execute this strategy, and ranges from the huge variation in employment contracts – particularly across Europe – to the timing and phasing of any roll-out by functional area.\nOur established relationships with key Governmental representatives in the major European centres help inform decisions on where to best locate European Headquarters in order to take the best advantage of both regional incentives and the Biopharma talent pool.\nWe have strategic partners to support our advisory service right across the full spectrum when launching new products. These partners cover a wide and diverse spectrum including Market Access/Pricing, Regulatory, Medical, Legal, Research, Communications, Governments, Training, HR, Payroll, and Investors.`}
      />
      <SolutionAccordion
        title={"Board, C-suite, Leadership"}
        content={`Great science deserves great teams and great teams need exceptional leadership. This applies right across the whole value chain from Drug Development through to Commercialisation, and getting the right leadership team in place early is a critical success factor. We have an enviable track record of advising and building top Boards and Leadership teams globally, spearheaded by CEO and Founder, Greg Bell, ably supported Sean Morgan-Jones (CCO) and Senior Client Partners Magdalena Meyer, Iman Askari and Emile Hadian.`}
      />
      <SolutionAccordion
        title={"Commercialization"}
        content={`The Morgan Prestwich Team are the only search firm globally to have exclusively built over 14 biotech companies entire international launch teams (Leadership, Commercial, Medical), both above-country and in-country.\n
        Delivering ground breaking medical innovation to a patient’s bedside relies on the expertise of professionals in Leadership, Medical, Product Launch, Market Access, Marketing and Sales, and these are core to our heritage. Led by our Senior Client Partners, Magdelena Meyer, Emile Haddian (Medical Affairs) and Iman Askari, all supported closely by CEO, Greg Bell, our commercialisation practice has extensive global networks which deliver an A Class team alongside your A Class medicine.`}
      />
      <SolutionAccordion
        title={"Medical Affairs"}
        content={`Our clients are focused on leading edge scientific innovation, making Medical and Medical Affairs a pivotal function. Simon Felton, one of the sector’s most knowledgeable and experienced consultants, leads this practice. Simon, together with his team, can build a client’s entire medical function across Europe and North America, from global and above-country senior leadership through to in-country affiliate build out. Our multilingual team of experts work on business-critical projects from Chief Medical Officer recruitment through to building entire teams of MSLs.`}
      />
      <SolutionAccordion
        title={"Clinical Development"}
        content={`Our expert clinical development team support clients from Pre-Clinical through clinical phases I – IV. We strengthen Boards and Leadership teams to develop their science in preparation for commercialisation or acquisition. We work with true start-up Biotech companies in rare, orphan, and speciality diseases, where science can have a real impact on patient lives.`}
      />
      <SolutionAccordion
        title={"Technical Operations"}
        content={`Our Technical Operations practice spans Regulatory Affairs, Quality Assurance and Pharmacovigilance.\n
        Each discipline plays a critical role in the safe and effective delivery of medicines to patients, with Regulatory Affairs playing a central role as the interface between the health agencies and various functions within the business.  Expertise in the regulatory environment, combined with a strategic overview and the ability to work cross-functionally, makes professionals in this discipline highly sought after. Quality Assurance ensures health providers can be confident that every unit provided reaches the required quality standards and is compliant with all the regulatory standards.  Constant monitoring through Pharmacovigilance maintains that confidence over time with constant monitoring used to prevent Adverse Drug Reactions.`}
      />
      <SolutionAccordion
        title={"Digital Health, Artificial Intelligence & MachineLearning"}
        content={`Our Digital Health (DH), Artificial Intelligence (AI) and Machine Learning (ML) division works closely with growing organisations globally.\n
        Advancing technologies such as AI and ML have strengthened data generation and therefore collection. This drives better insights which leads to a faster decision-making process for medicines and Medical Technology. Our team work globally and are experts in supporting start-ups and established companies build or add to their Executive and Leadership teams.
        `}
      />
      <SolutionAccordion
        title={"Manufacturing and Distribution"}
        content={`With ever evolving scientific endeavour comes additional logistical challenges, ranging from complex manufacturing processes to cold storage and transportation of new biologics and gene therapies. Our manufacturing and distribution practice boast a first class global network of experts in this field who are available on a full-time or contract basis.
        `}
      />
      <SolutionAccordion
        title={"Medical Technology"}
        content={`Our Medical Technology (Devices) team is led by a dedicated team of Resourcers and Researchers spanning Europe and the US. With more than 500,000 medical technologies available today, and new innovations expanding those numbers exponentially, our MedTech team work tirelessly with clients around the world to bring leading edge talent to leading edge technologies. They share a common purpose of improving, extending, and transforming people’s lives.`}
      />
    </div>
  );
}

export default SolutionSec1;
