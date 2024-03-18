import React, { FC } from "react";
import SideDashboard from "../components/SideDashboard";

const BeepManagement: FC = () => {
  return (
    <div className="bg-[#E3E2DC] text-center flex flex-col justify-center ">
      <>
        <SideDashboard />
        <div className="text-center flex flex-col justify-center">
          <p className="font-bold text-[#f87171] p-2">
            THIS IS Beep Management
          </p>
        </div>
      </>
      <div className="text-center flex flex-col justify-center"> HELLO </div>
    </div>
  );
};

export default BeepManagement;
