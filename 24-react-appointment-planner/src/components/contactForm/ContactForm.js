import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='name' value={name} onChange={({target}) => {setName(target.value)}} />
      <input type='tel' placeholder='phone' value={phone} onChange={({target}) => {setPhone(target.value)}} />
      <input type='email' placeholder='email' value={email} onChange={({target}) => {setEmail(target.value)}} />
      <input type='submit' /> 
    </form>
  );
};
