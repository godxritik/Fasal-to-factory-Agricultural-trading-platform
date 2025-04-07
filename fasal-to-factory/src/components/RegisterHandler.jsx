import sickelLogo from "../assets/images/sickel.png"
import businessmanLogo from "../assets/images/businessman.png"
import FarmerRegister from "./FarmerRegister";
import TraderRegister from "./TraderRegister";
import { useState } from "react";
import Navbar from "./Navbar";

function RegisterHandler() {
  return (
    <div className="w-full min-h-screen ">
      <Navbar />

      <div className="w-full flex flex-col items-center py-4 flex-wrap">

        <span className="text-xl font-medium text-[#3F7D58] my-6">Register me as</span>
        <div className="flex flex-wrap">
          <div className="w-[200px]  flex flex-col justify-center items-center py-4 my-4 rounded-lg shadow-lg hover:shadow-[#3F7D58] hover:shadow-md transition-all duration-300 mx-8 ">
            <img className="w-[100px] mb-4" src={sickelLogo} alt="" />
            <a href="/register-farmer" className="block border border-[#3F7D58] px-8 py-4 rounded-lg text-[#3F7D58]  font-medium hover:text-white hover:bg-[#3F7D58] transition-all duration-500">Farmer</a>
          </div>
          <div className="w-[200px]  flex flex-col justify-center items-center py-4 my-4 rounded-lg shadow-lg hover:shadow-[#EC5228] hover:shadow-md transition-all duration-300 mx-8">
            <img className="w-[100px] mb-4" src={businessmanLogo} alt="" />
            <a href="/register-trader" className="block border border-[#EC5228] px-8 py-4 rounded-lg text-[#EC5228]  font-medium hover:text-white hover:bg-[#EC5228] transition-all duration-500">Trader</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default RegisterHandler;