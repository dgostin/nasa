import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ImageOverlay = ({ imageUrl, text, title }) => {
  const [textOpen, setTextOpen] = useState(false);

  return (
    <div className="flex relative pt-[60px] justify-center mx-[30px]">
      <div className="relative inline-block border-2 border-green-700 rounded">
        <img src={imageUrl} alt="Display" className="object-cover" />
        {/* <div className="absolute bottom-0 left-0 w-full bg-black/40 flex flex-col items-center h-[120px]"> */}
        <div
          className={`transition-all duration-700 ${
            textOpen ? "max-h-full h-2/3" : "h-[100px]"
            // textOpen ? "scale-50" : ""
          } absolute bottom-0 left-0 w-full bg-black/60 flex flex-col pb-4`}
        >
          <button
            className="mx-auto mb-2 text-white text-center my-1 bg-slate-700 hover:bg-slate-500 p-2 rounded transition-all duration-700"
            onClick={() => setTextOpen(!textOpen)}
          >
            {textOpen ? <FaArrowDown size={14} /> : <FaArrowUp size={14} />}
          </button>
          <h2 className="text-white text-center ml-4 mb-2 text-3xl">{title}</h2>

          {textOpen ? (
            <p className="text-stone-400 ml-4 px-2 overflow-y-auto scrollbar-webkit text-xs sm:text-lg">
              {text}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
