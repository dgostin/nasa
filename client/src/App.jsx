import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ImageOverlay from "./ImageOverlay";
import LoadingSpinner from "./LoadingSpinner";

export default function App() {
  // const [imageUrl, setImageUrl] = useState("");
  // const [text, setText] = useState("");
  // const [title, setTitle] = useState("");

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setImageUrl(data.url);
        // setText(data.explanation);
        // setTitle(data.title);
        setData(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      {data.title ? (
        <ImageOverlay data={data} />
      ) : (
        <div className="min-h-screen pt-80">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}
