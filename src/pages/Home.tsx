import React from "react";
import Navbar from "../components/Navbar";
import Main1 from "../components/Main";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Main1 />
      <div className="text-[#f87171]">
        <div className="text-center flex flex-col justify-center">
          <p className="font-bold text-[#f87171] p-2">This is the Home Page</p>
        </div>
      </div>
    </>
  );
}
