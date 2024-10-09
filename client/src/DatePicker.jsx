import React, { useState } from "react";
import { getDate } from "./utils";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <label className="text-lg font-medium">Select a Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-black md:text-xl"
        min="1995-06-16"
        max={getDate()}
      />
      {/* {selectedDate && (
        <p className="mt-4 text-lg">Selected Date: {selectedDate}</p>
      )} */}
    </div>
  );
};

export default DatePicker;
