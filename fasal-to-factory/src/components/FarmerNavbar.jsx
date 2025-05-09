import { useState, useEffect } from "react"; // added useEffect
import plantLogo from "../assets/images/plantLogo.svg";
import menuIcon from "../assets/images/menuIcon.svg";
import FarmerSidebar from "../components/FarmerSidebar.jsx";
import FarmerProfile from "../components/FarmerProfile.jsx";
import AddItem from "./AddItem.jsx";
import FarmerMyCart from "./FarmerMyCart.jsx";

function FarmerNavbar() {
  // States for handling sidebar
  const [menuStatus, setMenuStatus] = useState(false);
  const handleMenuToggle = () => {
    setMenuStatus(!menuStatus);
  };

  // States for handling profile menu
  const [profileStatus, setProfileStatus] = useState(false);
  const handleProfileToggle = () => {
    setMenuStatus(!menuStatus);
    setProfileStatus(!profileStatus);
  };

  // States for handling add item menu
  const [addItemStatus, setAddItemStatus] = useState(false);
  const handleAddItemToggle = () => {
    setMenuStatus(!menuStatus);
    setAddItemStatus(!addItemStatus);
  };

  const [myCartStatus, setMyCartStatus] = useState(false);
  const handleMyCartToggle = () =>{
    setMyCartStatus(!menuStatus);
    setMyCartStatus(!myCartStatus);
  }

  //  Get userId from localStorage
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (

    <div className="w-full border px-4 py-2 bg-[#3F7D58] text-white rounded-t-xl text-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full flex-wrap ">
        {/* Left - Logo */}
        <div className="flex gap-2 items-center mb-3 sm:mb-0">
          <img className="w-[40px]" src={plantLogo} alt="Farm Logo" />
          <a href="/farmer-dashboard">Fasal 2 factory</a>
        </div>

        {/* Center - Navigation Links */}
        <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-3 sm:mb-0">
          <li><a href="/" className="hover:font-bold">Home</a></li>
          <li><a href="#" className="hover:font-bold">About</a></li>
          <li><a href="/contact-us" className="hover:font-bold">Contact</a></li>
        </ul>

        {/* Right - Menu Icon */}
        <button onClick={handleMenuToggle} className="mb-3 sm:mb-0">
          <img className="w-[35px]" src={menuIcon} alt="" />
        </button>
      </div>

      {/* Overlays */}
      <FarmerSidebar
        menuStatus={menuStatus}
        handleMenuToggle={handleMenuToggle}
        handleProfileToggle={handleProfileToggle}
        handleAddItemToggle={handleAddItemToggle}
        handleMyCartToggle={handleMyCartToggle}
      />

      <FarmerProfile
        userId={userId}
        profileStatus={profileStatus}
        handleProfileToggle={handleProfileToggle}
      />

      <AddItem addItemStatus={addItemStatus} handleAddItemToggle={handleAddItemToggle} />

      <FarmerMyCart myCartStatus ={myCartStatus} handleMyCartToggle={handleMyCartToggle} />

    </div>



  );
}

export default FarmerNavbar;
