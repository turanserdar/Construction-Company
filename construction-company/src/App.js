import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
