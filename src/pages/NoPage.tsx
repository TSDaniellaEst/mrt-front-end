import React, { FC } from "react";
import Navbar from "../components/Navbar";
import SideDashboard from "../components/SideDashboard";

const Nopage: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="text-[#f87171]">
        <div className="text-center flex flex-col justify-center">
          <p className="font-bold text-[#f87171] p-2">Page Not Found :c</p>
        </div>
      </div>
    </div>
  );
};

export default Nopage;
