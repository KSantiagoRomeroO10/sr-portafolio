'use client'

import './Button1.css'

import { useRouter } from 'next/navigation'

const Button1 = ( {text, route, styles} ) => {

  const router = useRouter()

  return (
    <p 
      className={`button1 ${styles === 'right' ? 'button1Right' : styles === 'left' ? 'button1Left' : styles === 'selected' ? 'button1Selected' : ''}`} 
      onClick={() => router.push(route)}
    >
      {text}
    </p>
  )

  // switch (styles) {
  //   case 'button1Right':
  //     return (
  //       <p className='button1Right' onClick={() => router.push(route)}>
  //         {text}
  //       </p>
  //     );
  //   case 'selected':
  //     return (
  //       <p className='selected' onClick={() => router.push(route)}>
  //         {text}
  //       </p>
  //     );
  //   default:
  //     return (
  //       <p className='button1' onClick={() => router.push(route)}>
  //         {text}
  //       </p>
  //     );
  // }
  
}
export default Button1