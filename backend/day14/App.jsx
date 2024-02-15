// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Hello_World from "./components/Hello_World"
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddBookingForm from "./crud/AddBookingForm";
import Userhome from "./pages/userhome";
import Contact from "./pages/Contact";
import ALogin from "./Admin/ALogin";
import Ahome from "./Admin/AHome";
import BoatDetails from "./pages/BoatDetails";
import Aprofile from "./Admin/AProfile";
import Table from "./crud/Table";
import Atable from "./Admin/ATable";
import Addboat from "./Addboat";
import Sucess from "./pages/success";
import Edit from "./Admin/EditNav";
import Ab from "./Admin/EditAbout";
import Ab1 from "./pages/About1";
import BoatForm from "./Addboat";



function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/book" element={<AddBookingForm/>}/>
      <Route path="/userhome" element={<Userhome/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/ALogin" element={<ALogin/>}/>
      <Route path="/AHome" element={<Ahome/>}/>
      <Route path="/Boat" element={<BoatDetails/>}/>
      <Route path="/Pro" element={<Aprofile/>}/>
      <Route path="/Tab" element={<Table/>}/>
      <Route path="/ATab" element={<Atable/>}/>
      <Route path="/addboat" element={<BoatForm/>}/>
      <Route path="/sucess" element={<Sucess/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/ab" element={<Ab/>}/>
      <Route path="/ab1" element={<Ab1/>}/>
    </Routes>
   </Router>
  // <Ahome/>
    
  )
}

export default App;
