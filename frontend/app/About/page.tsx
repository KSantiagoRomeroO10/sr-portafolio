import React from 'react';

import Navbar from '@/app/Components/Navbar/Navbar';
import Button1 from '@/app/Components/Buttons/Button1';
import Index from '@/app/Components/TextContentCV/Index';

import Sections from './Sections';
import InfoBasic from './InfoBasic';

import { ButtonProps } from '@/app/Components/Buttons/Button1'

export const metadata = {
  title: 'About me',
};

const CV: React.FC = () => {
  const Buttons: ButtonProps[] = [
    { text: 'About', route: 'About', styles: 'selected' },
    { text: 'Projects', route: 'Projects' },
    { text: 'Learn', route: 'Learn' },
  ];
    
  return (
    <>
      <Navbar buttons={Buttons.map((button, index) => (
        <Button1 key={index} {...button} />
      ))} />
      <Index Sections={Sections} InfoBasic={InfoBasic} />
    </>
  );
};

export default CV;
