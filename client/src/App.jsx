import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Nasa from "./Nasa";

export default function App() {
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
    <>
      <Navbar />
      <Nasa />
    </>
  );
}
