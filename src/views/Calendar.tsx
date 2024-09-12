import { useState } from "react";
import { events } from "../data/events";
import {
  isSameDay,
  format,
  addMonths,
  subMonths,
  getMonth,
  getYear,
} from "date-fns";

import ForwardIcon from "../images/icons/forward.svg";
import BackIcon from "../images/icons/back.svg";
import CalendarCard from "../components/CalendarCard";

function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const nextMonth = () => setCurrentDate((prevDate) => addMonths(prevDate, 1));
  const prevMonth = () => setCurrentDate((prevDate) => subMonths(prevDate, 1));

  const currentMonth = getMonth(currentDate);
  const currentYear = getYear(currentDate);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  const getWeekdays = () => {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  };

  const filteredEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      return (
        getMonth(eventDate) === currentMonth &&
        getYear(eventDate) === currentYear
      );
    })
    .sort((a, b) => {
      const [aHour, aMinute] = a.time.split(":").map(Number);
      const [bHour, bMinute] = b.time.split(":").map(Number);
      if (a.date === b.date) {
        return aHour - bHour || aMinute - bMinute;
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(currentYear, currentMonth, i + 1);
    return {
      date,
      dayNumber: i + 1,
      events: filteredEvents.filter((event) =>
        isSameDay(date, new Date(event.date + "T" + event.time)),
      ),
    };
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center mb-6">
        <button onClick={prevMonth}>
          <img src={BackIcon} className="h-10" />
        </button>
        <h2 className="text-4xl font-bold text-center text-lavendar mx-4 ">
          {format(currentDate, "MMM yyyy")}
        </h2>
        <button onClick={nextMonth}>
          <img src={ForwardIcon} className="h-10" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-bold mb-2 text-lavendar">
        {getWeekdays().map((day, index) => (
          <div key={index} className="p-2 text-xl">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDay }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg bg-like-lavendar bg-opacity-30 h-32 diagonal-lines"
          ></div>
        ))}
        {daysArray.map((day, index) => (
          <CalendarCard
            key={index}
            day={day}
            isToday={day.date.toDateString() === new Date().toDateString()}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
