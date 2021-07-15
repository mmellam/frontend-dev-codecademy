import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');
  const handleTextChange = ({target}) => {
    setText(target.value);
  }
   const handleSubmit = ({target}) => {
     event.preventDefault();
     if (text.length > 0) {
     const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
     props.addThought(thought);
     setText('');
     }
  }


  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
        value={text}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
