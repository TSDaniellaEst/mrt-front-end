import React, { FC } from "react";
import SideDashboard from "../components/SideDashboard";

const StationManagement: FC = () => {
  return (
    <div className="bg-[#E3E2DC]">
      <>
        <SideDashboard />
        <div className="bg-gray-700">
          <div className="text-center flex flex-col justify-center">
            <p className="font-bold text-[#f87171] p-2">
              THIS IS Station Management
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default StationManagement;
