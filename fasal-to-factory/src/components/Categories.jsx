import FlipCard from "./FlipCard";
import type1 from "../assets/carousel/wheatPlant.jpg";
import type2 from "../assets/images/beans.jpg";
import type3 from "../assets/images/fruits.jpg";
import type4 from "../assets/images/almonds.jpg";



function Categories(){
    return(
        <div className=" gap-3 px-4 pt-4 pb-16  items-center ">
            <span className=" block text-center my-8 text-2xl font-medium text-[#3F7D58]">Categories</span>
             <div className="flex flex-wrap gap-3 justify-around">
             
                <FlipCard src={type1} labelName={"Food Grains"} categoryName={"Food Grains"} />

                <FlipCard src={type2} labelName={"Pulses"} categoryName={"Beans & Legumes"} />
                
                <FlipCard src={type3} labelName={"Fruits"} categoryName={"Fruits"} />

                <FlipCard src={type4} labelName={"Nuts"} categoryName={"Nuts"} />
               
             </div>
             

        </div>
    )
}

export default Categories;