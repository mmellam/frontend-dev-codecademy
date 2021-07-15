import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addAppoint(currentTitle, currentDate, currentTime, currentContact);
   setCurrentTitle('');
   setCurrentContact('');
   setCurrentDate('');
   setCurrentTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={currentTitle}
          contact={currentContact}
          date={currentDate}
          time={currentTime}
          setTitle={setCurrentTitle}
          setContact={setCurrentContact}
          setDate={setCurrentDate}
          setTime={setCurrentTime}
          handleSubmit={handleSubmit}
          contacts={props.contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={props.appoints} />
      </section>
    </div>
  );
};
