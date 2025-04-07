import ExecutiveProfileCard from "./ExecutiveProfileCard";
import ritikPic from "../assets/images/ritikPic.jpeg"
import utkarshPic from "../assets/images/utkarshPic.jpeg"
import vanshPic from "../assets/images/vanshPic.jpeg"



function Executives() {
    return (
        <div className="flex flex-col flex-wrap  bg-white py-6 "> 
            <span className="text-center text-2xl font-medium mb-6 text-[#3F7D58]">Our Executives</span>
            <div className="flex flex-wrap justify-around mx-auto gap-10">
                <ExecutiveProfileCard imageSrc={ritikPic} name={"Ritik Gaur"} designation={"founder & CEO"} />

                <ExecutiveProfileCard imageSrc={utkarshPic} name={"Utkarsh Bihari"} designation={"Sales Executive Bihar region"} />

                <ExecutiveProfileCard imageSrc={vanshPic} name={"Vansh Sachdev"} designation={"Co-founder"} />
            </div>

        </div>
    )
}

export default Executives;