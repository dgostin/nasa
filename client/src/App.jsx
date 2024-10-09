import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Nasa from "./Nasa";
import LoadingSpinner from "./LoadingSpinner";

export default function App() {
  const [data, setData] = useState({});
  const [selectedDate, setSelectedDate] = useState(getDate());

  useEffect(() => {
    fetch(`/api/data?date=${selectedDate}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [selectedDate]);

  function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(currentDate.getDate()).padStart(2, "0"); // Add leading zero if needed

    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <Navbar />
      {data.title ? (
        <Nasa
          data={data}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : (
        <div className="min-h-screen pt-80">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}
