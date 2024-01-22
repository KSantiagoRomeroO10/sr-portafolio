import React from 'react';
import './Form.css';

interface FormProps {
  title: string;
  inputs: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ title, inputs }) => {
  return (
    <form className="form">
      <h1>{title}</h1>
      <br />
      <hr />
      <br />
      {inputs}
    </form>
  );
};

export default Form;
