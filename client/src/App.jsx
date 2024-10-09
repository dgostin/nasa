import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ImageOverlay from "./ImageOverlay";

export default function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImageUrl(data.url);
        setText(data.explanation);
        setTitle(data.title);
      });
  }, []);

  return (
    <>
      <Navbar />
      {imageUrl ? (
        <ImageOverlay imageUrl={imageUrl} text={text} title={title} />
      ) : (
        <div className="text-purple-500">Waiting</div>
      )}
    </>
  );
}
