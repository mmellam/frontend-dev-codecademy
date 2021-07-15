import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState(
    [
      {
        name: 'Example name', 
        phone: '0123456789', 
        email: 'example@gmx.de'
      }, 
      {
        name: 'Marie Mustermann', 
        phone: '987654321', 
        email: 'example@gmail.com'
      }
    ]);

  const [appoints, setAppoints] = useState(
    [
      {
        title: 'Tanz',
        date: '23-04-21',
        time: '18:20'
      }
    ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts(prev => [...prev, newContact]);
  }

  const addAppoint = (title, date, time, contact) => {
    const newAppoint = {
      title: title,
      date: date,
      time: time,
      contact: contact
    };
    setAppoints(prev => [...prev, newAppoint]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appoints={appoints} addAppoint={addAppoint} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
