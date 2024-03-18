import React, { FC } from "react";
import SideDashboard from "../components/SideDashboard";

const Nopage: FC = () => {
  return (
    <div className="bg-[#E3E2DC]">
      <>
        <SideDashboard />
        <div className="bg-gray-600">
          <div className="text-center flex flex-col justify-center">
            <p className="font-bold text-[#f87171] p-2"></p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Nopage;
