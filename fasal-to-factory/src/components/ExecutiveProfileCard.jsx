function ExecutiveProfileCard({imageSrc,name,designation}) {
    return (

        <div className=" w-[220px] bg-white  rounded-lg py-6 shadow-lg ">
            <div className="flex flex-col items-center ">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg " src={imageSrc} alt="" />
                <h5 className="mb-1 text-xl font-medium text-[#3F7D58]">{name}</h5>
                <span className="text-sm font-medium  text-[#4a996a] ">{designation}</span>
            
            </div>
        </div>

    )
}

export default ExecutiveProfileCard;