import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ImageOverlay = ({ imageUrl, text }) => {
  const [textOpen, setTextOpen] = useState(false);

  return (
    <div className="flex relative pt-[60px] justify-center mx-[30px]">
      <div className="relative inline-block border border-slate-300">
        <img src={imageUrl} alt="Display" className="object-cover" />
        {/* <div className="absolute bottom-0 left-0 w-full bg-black/40 flex flex-col items-center h-[120px]"> */}
        <div
          className={`transition-all duration-700 ${
            textOpen ? "max-h-full h-3/4" : "h-[120px]"
            // textOpen ? "scale-50" : ""
          } absolute bottom-0 left-0 w-full bg-black/60 flex flex-col items-center pb-4`}
        >
          <button
            className="text-white text-center my-1 hover:bg-slate-500 p-2 rounded transition-all duration-700"
            onClick={() => setTextOpen(!textOpen)}
          >
            {textOpen ? <FaArrowDown size={16} /> : <FaArrowUp size={16} />}
          </button>
          <p className="text-white text-center px-2 overflow-y-auto scrollbar-thin text-xs sm:text-lg">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
