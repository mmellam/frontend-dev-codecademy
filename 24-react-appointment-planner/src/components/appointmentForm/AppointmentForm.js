import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} >
      <input type='text' placeholder='title' value={title} onChange={({target}) => {setTitle(target.value)}} />
      <input type='text' placeholder='date' min={getTodayString()} value={date} onChange={({target}) => {setDate(target.value)}} />
      <input type='text' placeholder='time' value={time} onChange={({target}) => {setTime(target.value)}} />
      <ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} />
      <input type='submit' />
    </form>
  );
};
