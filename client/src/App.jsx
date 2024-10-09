import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Nasa from "./Nasa";
import LoadingSpinner from "./LoadingSpinner";
import { getDate } from "./utils";

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
