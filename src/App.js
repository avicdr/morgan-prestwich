import "./App.css";
import "./responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Story from "./components/OurStory/Story";
import Team from "./components/Team/Team";
import Candidates from "./components/Candidates/Candidates";
import ContactUs from "./components/ContactUs/ContactUs";
import Solution from "./components/Solution/Solution";
import DataProtection from "./components/DataProtection";
import Insights from "./components/Insights/Insights";
import Blog from "./components/Insights/Blog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/solutions" element={<Solution />} />
          <Route path="/team" element={<Team />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/blog" element={<Blog />} />
          <Route path="/data-protection-policy" element={<DataProtection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;