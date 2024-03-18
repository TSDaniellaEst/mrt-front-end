import React, { FC } from "react";
import SideDashboard from "../components/SideDashboard";

const StationList: FC = () => {
  return (
    <div className="bg-[#E3E2DC]">
      <>
        <SideDashboard />
        <div className="text-center flex flex-col justify-center">
          <p className="font-bold text-[#f87171]">THIS IS Station List</p>
        </div>
      </>
    </div>
  );
};

export default StationList;
