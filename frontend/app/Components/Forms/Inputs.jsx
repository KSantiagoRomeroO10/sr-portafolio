'use client'

import './Inputs.css';
import { useState } from 'react';

const Inputs = ({ type, name, placeholder, value, nameLabel }) => {

  const [valueInput, setvalueInput] = useState('');

  const handleChange = (event) => {
    setvalueInput(event.target.value);
  };

  return (
    <>
      <label htmlFor={name?name:type}><p>{nameLabel?nameLabel:''}</p></label>
      <input 
        type={type} 
        name={name?name:type}
        placeholder={placeholder?placeholder:''}
        id={name?name:type}
        value={type==='button'?value:valueInput}
        //value={valueInput?valueInput:''}
        onChange={handleChange}
      />
    </>
  );

}

export default Inputs
