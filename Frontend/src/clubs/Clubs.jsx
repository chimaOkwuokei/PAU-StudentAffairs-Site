import React from "react";
import Navbar from "../components/Navbar";
import Club from "../components/Club";
import Footer from "../components/Footer";
function Clubs() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Club />
      </div>
      <Footer />
    </>
  );
}

export default Clubs;
