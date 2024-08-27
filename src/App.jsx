import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import UseState from "./components/hooks/UseState";
import UseEffect from "./components/hooks/UseEffect";
import Intro from "./components/Overview/Intro";
import SideNav from "./pages/SideNav";
import UseContext from "./components/hooks/useContext";
function App() {
  return (
    <>
      {/* <h1 className="text-red-400">Hai</h1> */}
      <Router>
        <div className=" ">
          <Navbar />
        </div>
        <div className="flex ">
          <div className=" lg:flex hidden  border-r fixed top-0 overflow-y-auto h-full  left-0 py-28 items-center w-24 lg:w-48 ">
            <SideNav />
          </div>
          <div className="py-20 flex-1 lg:py-28  lg:w-full  lg:px-10 px-3 lg:pl-72  ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/foot" element={<Footer />} />
              <Route path="/Navbar" element={<Navbar />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/useState" element={<UseState />} />
              <Route path="/useEffect" element={<UseEffect />} />
              <Route path="/useContext" element={<UseContext />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
