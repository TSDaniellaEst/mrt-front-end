import React, { FC } from "react";
import SideDashboard from "../components/SideDashboard";

const StationList: FC = () => {
  return (
    <div className="bg-[#E3E2DC]">
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideDashboard />
          <div className="container bg-white flex flex-col mx-auto rounded-3xl p-10 mt-11 mb-11">
            <p className="font-bold text-[#222C55] text-3xl">
              Station List
            </p>
            <div className="container bg-[#ECEBE6] flex flex-col mx-auto rounded-3xl p-10 mt-11 mb-11 h-full"></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default StationList;
