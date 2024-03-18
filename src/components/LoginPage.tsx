import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mrtpic from "../assets/mrtpic1.png";

const Login = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSignInClick = () => {
    if (user === "admin" && password === "admin") {
      navigate("/admin/home");
    } else {
      window.alert("Invalid Password or Username user=admin,pass=admin");
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={mrtpic} alt="" />
      </div>

      <div className="bg-[#fca5a5] flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-3xl font-bold text-[#f87171] text-center py-6">
            Admin
          </h2>
          <div className="font-bold text-[#f87171] flex flex-col py-2">
            <label>Username</label>
            <input
              className="border p-2"
              type="text"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className=" font-bold text-[#f87171] flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            onClick={handleSignInClick}
            className="border w-full my-5 py-2 bg-[#f87171] hover:bg-[#FF8585] text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
