import type1 from "../assets/carousel/wheatPlant.jpg";

function FlipCard({src, labelName, categoryName  }) {
  return (
    
  <a href="#"  className="flex flex-col justify-center items-center">
      <div className="group cursor-pointer relative h-60 w-60 [perspective:1000px]  ">
      <div className="absolute duration-500 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        {/* Front side with image */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden]">
          <div className="relative w-full h-full">
            <img 
              className="absolute inset-0 w-full h-full object-cover"
              src={src} 
              alt="Wheat Plant" 
            />
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
          <div className="flex justify-center items-center h-full">
            <div className="text-2xl font-bold mb-4">{labelName}</div>
          </div>
        </div>
      </div>
    </div>

  <span className="text-[#3F7D58] font-medium text-lg my-1">{categoryName}</span>

 </a>
  );
}

export default FlipCard;