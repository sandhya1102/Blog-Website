import React, { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const today = new Date();

  const currentDayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const prevMonth = () => {
    setDate(new Date(currentYear, currentMonth - 1));
  };

  const nextMonth = () => {
    setDate(new Date(currentYear, currentMonth + 1));
  };

  return (
    <div className="calender 2xl:w-[280px] xl:h-[240px] lg:h-[240px] lg:w-[230px] w-[50%] h-auto bg-zinc-900 flex justify-center items-center rounded-xl  relative">
      <div className="month absolute top-2 left-2 flex gap-2 ">
        <h3 className="text-2xl font-bold">
          {months[currentMonth]}, {currentYear}
        </h3>
        <div className="absolute left-62 md:left-120 lg:left-74 2xl:left-94 flex gap-3 top-0 text-[1.5rem]">
          <button onClick={prevMonth}>
            <i className="fa-solid fa-chevron-left text-lg p-2 bg-zinc-700 rounded-full cursor-pointer"></i>
          </button>
          <button onClick={nextMonth}>
            <i className="fa-solid fa-chevron-right text-lg p-2 bg-zinc-700 rounded-full cursor-pointer"></i>
          </button>
        </div>
      </div>

      <div className="weekdays absolute top-18 grid grid-cols-7 w-full text-center text-[1.2rem]">
        {weekdays.map((day, index) => (
          <span
            key={index}
            className={`p-1 ${
              index === currentDayIndex ? "text-blue-500 font-bold " : ""
            }`}
          >
            {day}
          </span>
        ))}
      </div>

      <div className="days grid grid-cols-7 gap-3 w-full text-center text-[1.2rem] cursor-pointer">
        {Array.from({ length: adjustedFirstDay }).map((_, i) => (
          <span key={i} className="text-gray-500">
            -
          </span>
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isToday =
            today.getFullYear() === currentYear &&
            today.getMonth() === currentMonth &&
            today.getDate() === day;

          return (
            <span
              key={day}
              className={`p-2 w-10 h-10 flex items-center justify-center cursor-pointer ${
                isToday
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-[50%]"
                  : "hover:bg-zinc-600"
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
