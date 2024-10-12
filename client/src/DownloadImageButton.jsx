import React from "react";

const DownloadImageButton = ({ date }) => {
  return (
    <a
      href={`/api/data?date=${date}&hdimage=1`}
      download // download="myimage.jpg"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
    >
      Get HD Image
    </a>
  );
};

export default DownloadImageButton;
