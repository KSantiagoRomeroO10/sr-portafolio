import Navbar from '@/app/Components/Navbar/Navbar'
import Button1 from '@/app/Components/Buttons/Button1'

import Index  from '@/app/Components/TextContentCV/Index'

import Sections from './info'

import { Metadata } from 'next'
 
export const metadata = {
  title: 'About me'
}

const CV = () => {

  const Buttons = [
    { text: 'About', route: 'About', styles: 'selected' },
    { text: 'Projects', route: 'Projects' },
    { text: 'Learn', route: 'Learn' },
  ]

  return(
    <>
      
      <Navbar buttons={
        Buttons.map((button, index) => (
          <Button1 
            text={button.text} 
            route={button.route} 
            styles={button.styles} 
            key={index}
          />
        ))
      }/>

      <Index Sections={Sections}/>

    </>
  )
}

export default CV