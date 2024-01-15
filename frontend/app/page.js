'use client'

import './page.css'

import { useRouter } from 'next/navigation'

const Home = () => {
  
  const router = useRouter()

  return (
    <main className='container'>
      
      <div className='magicpattern'></div>

      <section className="presentation">
        <div className='hs'>
          <h1 className='h1' onClick={() => router.push('/About')}>Hi there!</h1>
          <h1 className='h2' onClick={() => router.push('/About')}>I'm</h1>
          <h1 className='h3' onClick={() => router.push('/About')}>Santiago R.</h1>
        </div>
      </section> 

      <section className='description'>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatum fuga officiis ducimus omnis laborum cum atque 
              ipsum rerum consequuntur laboriosam velit aspernatur aliquam, 
              nobis dolorum eveniet deleniti vel blanditiis sunt.
          </p>
      </section>

    </main>
  )

}
export default Home;