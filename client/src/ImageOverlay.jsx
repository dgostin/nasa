import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ImageOverlay = ({ data }) => {
  const [textOpen, setTextOpen] = useState(false);

  return (
    <div className="flex relative pt-[60px] justify-center mx-[30px]">
      <div className="relative inline-block border-2 border-green-700 rounded">
        <a href="">
          <img
            src={data.url}
            alt="Display"
            className="object-cover min-h-[800px]"
          />
        </a>
        {/* <div className="absolute bottom-0 left-0 w-full bg-black/40 flex flex-col items-center h-[120px]"> */}
        <div
          className={`transition-all duration-700 ${
            textOpen ? "max-h-full h-full sm:h-2/3" : "h-[100px]"
            // textOpen ? "scale-50" : ""
          } absolute bottom-0 left-0 w-full bg-black/60 flex flex-col pb-4`}
        >
          <button
            className="mx-auto mb-2 text-white text-center my-1 bg-slate-700 hover:bg-slate-500 p-2 rounded transition-all duration-700"
            onClick={() => setTextOpen(!textOpen)}
          >
            {textOpen ? <FaArrowDown size={14} /> : <FaArrowUp size={14} />}
          </button>
          <h2 className="text-white text-center ml-4 mb-2 text-md sm:text-3xl">
            {data.title}
          </h2>

          {textOpen ? (
            <>
              <p className="text-stone-400 ml-4 mb-6 px-2 overflow-y-auto scrollbar-webkit text-xs sm:text-lg">
                {data.explanation}
              </p>
              <div className="mx-8">
                <h3 className="text-md sm:text-xl">{data.copyright}</h3>
                <h4 className="text-gray-500 text-sm sm:text-lg">
                  {data.date}
                </h4>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
