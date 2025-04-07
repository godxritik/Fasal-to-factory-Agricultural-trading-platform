// import { useState } from "react";
// import plantLogo from "../assets/images/plantLogo.svg"
// import menuIcon from "../assets/images/menuIcon.svg"
// import FarmerSidebar from "../components/FarmerSidebar.jsx";
// import FarmerProfile from "../components/FarmerProfile.jsx";




// function FarmerNavbar() {

//   // States for handling sidebar
//   const [menuStatus, setMenuStatus] = useState(false);
//   const handleMenuToggle = () => {
//     setMenuStatus(!menuStatus);
//   }
//  // States for handling profile menu
//   const [profileStatus, setProfileStatus] = useState(false);
//   const handleProfileToggle = () => {
//     setMenuStatus(!menuStatus)
//     setProfileStatus(!profileStatus);
//   }

  
//   return (
//     <div className="flex flex-col sm:flex-row flex-wrap w-full border px-4 py-2 justify-center sm:justify-between items-center bg-[#3F7D58] text-white rounded-t-xl text-lg  ">
//       {/* Logo and Brand Name */}
//       <div className="flex gap-2 items-center mb-3 sm:mb-0">
//         <img className="w-[40px]" src={plantLogo} alt="Farm Logo" />
//         <a href="/farmer-dashboard">Fasal 2 factory</a>
//       </div>

//       {/* Navigation Links - Stack vertically on mobile, horizontal on sm+ */}
//       <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
//         <li><a href="/" className="hover:font-bold  ">Home</a></li>
//         <li><a href="#" className="hover:font-bold ">About</a></li>
//         <li><a href="/contact-us" className="hover:font-bold">Contact</a></li>
//       </ul>

//       <button onClick={handleMenuToggle}><img className="w-[35px] " src={menuIcon} alt="" /></button>

//       <FarmerSidebar menuStatus={menuStatus} handleMenuToggle={handleMenuToggle} handleProfileToggle={handleProfileToggle} />

//       <FarmerProfile  profileStatus={profileStatus} handleProfileToggle={handleProfileToggle} />

//     </div>
//   )
// }

// export default FarmerNavbar;

import { useState, useEffect } from "react"; // added useEffect
import plantLogo from "../assets/images/plantLogo.svg";
import menuIcon from "../assets/images/menuIcon.svg";
import FarmerSidebar from "../components/FarmerSidebar.jsx";
import FarmerProfile from "../components/FarmerProfile.jsx";

function FarmerNavbar() {
  // States for handling sidebar
  const [menuStatus, setMenuStatus] = useState(false);
  const handleMenuToggle = () => {
    setMenuStatus(!menuStatus);
  };

  // States for handling profile menu
  const [profileStatus, setProfileStatus] = useState(true);
  const handleProfileToggle = () => {
    setMenuStatus(!menuStatus);
    setProfileStatus(!profileStatus);
  };

  // 🟢 Get userId from localStorage
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap w-full border px-4 py-2 justify-center sm:justify-between items-center bg-[#3F7D58] text-white rounded-t-xl text-lg  ">
      {/* Logo and Brand Name */}
      <div className="flex gap-2 items-center mb-3 sm:mb-0">
        <img className="w-[40px]" src={plantLogo} alt="Farm Logo" />
        <a href="/farmer-dashboard">Fasal 2 factory</a>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <li><a href="/" className="hover:font-bold  ">Home</a></li>
        <li><a href="#" className="hover:font-bold ">About</a></li>
        <li><a href="/contact-us" className="hover:font-bold">Contact</a></li>
      </ul>

      <button onClick={handleMenuToggle}>
        <img className="w-[35px]" src={menuIcon} alt="" />
      </button>

      <FarmerSidebar
        menuStatus={menuStatus}
        handleMenuToggle={handleMenuToggle}
        handleProfileToggle={handleProfileToggle}
      />

      {/* 🔥 Now passing userId to FarmerProfile */}
      <FarmerProfile
        userId={userId}
        profileStatus={profileStatus}
        handleProfileToggle={handleProfileToggle}
      />
    </div>
  );
}

export default FarmerNavbar;
