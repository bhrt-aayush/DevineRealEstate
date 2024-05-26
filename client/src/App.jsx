import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/About" element={<About/>}/>
    
  </Routes>
  </BrowserRouter>
}