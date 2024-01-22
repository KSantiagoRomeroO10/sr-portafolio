'use client'

import React, { useState } from 'react';
import './Inputs.css';

interface InputsProps {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  nameLabel?: string;
}

const Inputs: React.FC<InputsProps> = ({ type, name, placeholder, value, nameLabel }) => {
  const [valueInput, setValueInput] = useState<string>(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };

  return (
    <>
      <label htmlFor={name ?? type}>
        <p>{nameLabel ?? ''}</p>
      </label>
      <input
        type={type}
        name={name ?? type}
        placeholder={placeholder ?? ''}
        id={name ?? type}
        value={type === 'button' ? value : valueInput}
        onChange={handleChange}
      />
    </>
  );
};

export default Inputs;
