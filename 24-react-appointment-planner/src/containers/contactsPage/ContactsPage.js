import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    e.preventDefault();
     if (duplicate) {
      alert('Contact already exists. Please enter a different name.');
      return;
    }  
    props.addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };
  // not working cause need to access name property!!
  useEffect(() => {
    if (props.contacts.includes(name)) {
      setDuplicate(true);
    }
    return;
  }, [name, props.contacts]); 
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} 
          phone={phone} 
          email={email} 
          setName={setName} 
          setPhone={setPhone} 
          setEmail={setEmail} 
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};
