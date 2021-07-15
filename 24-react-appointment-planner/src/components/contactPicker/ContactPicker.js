import React from "react";

export const ContactPicker = (props) => {
  return (
    
    <select onChange={props.onChange} >
      <option selected='selected' value=''>No contact selected</option>
      {props.contacts.map((contact) => {
        return (
          <option value={contact.name}>{contact.name}</option>
        )
      })}

    </select>
   

  );
};
