import React from "react";

function NewsCard({title , desc , src , url}) {
  return (
    <div>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white">
        <img
          className="w-full"
          src={src}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {desc}
          </p>
        </div>
        <div className="px-6 my-5">
            <a className="bg-blue-500 text-white py-2 px-5 rounded-xl" href={url}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
