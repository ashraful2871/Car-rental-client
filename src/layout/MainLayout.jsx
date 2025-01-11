import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  const footRef = useRef();
  return (
    <>
      <div className="max-w-7xl mx-auto md:space-y-5 md:p-5 xl:p-0 font-exo-2">
        <Navbar footRef={footRef}></Navbar>
        <div className="min-h-[440px] container mx-auto p-3 md:px-2 lg:px-0 pb-10">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer footRef={footRef}></Footer>
    </>
  );
};

export default MainLayout;
