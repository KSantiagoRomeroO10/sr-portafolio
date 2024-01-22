import React from 'react';
import './Info.css';

interface InfoProps {
  h1: string;
  info: string;
  buttons: React.ReactNode;
}

const Info: React.FC<InfoProps> = ({ h1, info, buttons }) => {
  return (
    <div className='information'>
      <div className='info'>
        <h1>{h1}</h1>
        <p>{info}</p>
      </div>
      {buttons}
    </div>
  );
};

export default Info;
