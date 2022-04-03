import React, { useState } from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavbarCustom } from "../components/navbar";
export default function Reservations() {
  const [date, setDate] = useState(new Date());
  const d = new Date();
  let disableTime = [d.setHours(13, 0), d.setHours(6, 30), d.setHours(4, 0)];
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <>
      <NavbarCustom />
      <div className="text-center" style={{ position: "relative" }}>
        <h1>Reservations</h1>
        <DatePicker
          style={{ position: "relative" }}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mmaa"
          excludeDates={[
            new Date("2022-04-08"),
            new Date("2022-04-09"),
            new Date("2022-04-22"),
            new Date("2022-04-27"),
          ]}
          minTime={d.setHours(11, 0)}
          maxTime={d.setHours(21, 0)}
          showTimeSelect
          excludeTimes={disableTime}
          showTimeSelect
          filterTime={filterPassedTime}
          selected={date}
          onChange={(date) => setDate(date)}
        />{" "}
      </div>
    </>
  );
}
