import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Layout() {
  return (
    <>
      
      <main>
         <Navbar/> 
          <Outlet/> 
        <Footer/>
      </main>

      
    </>
  );
}

export default Layout;
// create a navbar and footer 
//maintain folder structure to 
//navlink and link components 
//showcase one 