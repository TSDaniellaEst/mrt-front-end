import React, { FC } from "react";
import SideDashboard from "../components/SideDashboard";

const LoadBeep: FC = () => {
  return (
    <div className="bg-[#E3E2DC]">
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideDashboard />
          <div className="container bg-white flex flex-col mx-auto rounded-3xl p-10 mt-11 mb-11">
            <p className="font-bold text-[#222C55] text-3xl">LOAD BEEP CARD</p>
            <p className="font-bold text-[#222C55]">Tdfddff</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default LoadBeep;
