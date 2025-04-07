import { useState } from "react";
import plantLogo from "../assets/images/plantLogo.svg"
import closeIcon from "../assets/images/closeIcon.svg"
import { useNavigate } from "react-router-dom";
import SuccessMessage from "./SuccessMessage";

// import UpdateFarmerProfile from "./UpdateFarmerProfile";

function FarmerSidebar ({ menuStatus, handleMenuToggle,handleProfileToggle }) {

  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);

    setTimeout(() => { navigate("/login");}, 2000);

    // alert("Logged out successfully");
    // navigate("/login");
  };

    return (
      <div
        className={`fixed top-0 right-0 h-full max-w-[320px] w-full bg-[#fff] text-[#3F7D58] p- z-50 shadow-lg transform transition-transform duration-300 ${
          menuStatus ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end m-4">
          <button
            onClick={handleMenuToggle}
            className=""
          >
            <img className="w-6" src={closeIcon} alt="" />
          </button>
        </div>
  
        {/* Logo */}
        <div className="flex items-center justify-center bg-[#3F7D58] mb-10 py-1">
          <img
            src={plantLogo} // Replace with your logo path
            alt="Logo"
            className="w-10 h-10 mr-3"
          />
          <h1 className="text-2xl text-white font-medium ">fasal to Factory</h1>
        </div>
  
        {/* Menu Options */}
        <nav className="flex flex-col items-center gap-4 px-2">
          <button onClick={handleProfileToggle}  className="hover:bg-[#3F7D58] hover:text-white border-2 border-[#3F7D58] w-full py-1 rounded  transition-all duration-200 text-center cursor-pointer">Profile</button>
          <button className="hover:bg-[#3F7D58] hover:text-white border-2 border-[#3F7D58] w-full py-1 rounded  transition-all duration-200 text-center cursor-pointer ">Add Item</button>
          <button className="hover:bg-[#3F7D58] hover:text-white border-2 border-[#3F7D58] w-full py-1 rounded  transition-all duration-200 text-center cursor-pointer ">My Cart</button>
          <button className="hover:bg-[#3F7D58] hover:text-white border-2 border-[#3F7D58] w-full py-1 rounded  transition-all duration-200 text-center cursor-pointer ">My Sells</button>
          <button className="hover:bg-[#3F7D58] hover:text-white border-2 border-[#3F7D58] w-full py-1 rounded  transition-all duration-200 text-center cursor-pointer ">Settings</button>
          <button onClick={handleLogout} className="hover:bg-[#3F7D58] hover:text-white border-2 border-[#3F7D58] w-full py-1 rounded  transition-all duration-200 text-center cursor-pointer ">Logout</button>
        </nav>

        {/* Success Message */}
        <SuccessMessage title={"Logged out !"} message={"session ended"} show={showSuccess} setShow={setShowSuccess}/>
  

      </div>
    );
  };
  
  export default FarmerSidebar;
