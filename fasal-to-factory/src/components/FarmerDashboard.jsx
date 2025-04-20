import FarmerNavbar from "./FarmerNavbar";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Footer from "./Footer.jsx";
import { useState } from "react";
import CartItem from "./CartItem.jsx";
// import FarmerHamburgerIcon from "./FarmerHamburgerIcon.jsx";
// import FlipCard from "./FlipCard";


function FarmerDashboard() {
    return (
        <div>

            

            <FarmerNavbar />
            <div className="flex items-center  py-2 px-8 bg-gray-200 ">
                <SearchBar />
                <button className=" text-md px-4 py-3  bg-[#3F7D58] text-white font-medium rounded-r-lg ">Search</button>

                {/* <FarmerHamburgerIcon/> */}
            </div>
            <Carousel />
            <Categories/>
            


        </div>
    )
}

export default FarmerDashboard;