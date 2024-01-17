'use client'

import { useState } from 'react'
import './Section.css'

const Section = ( {Sections} ) => {
    
  const [currentPage, setCurrentPage] = useState(1)

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const academyHistory = Sections.map((section) => {
    if(Array.isArray(section.text)){
      const academicElement = section.text.map((academic) => {
        return(
          <div>
            <h3>{ academic.tittle }</h3>
            <p>{ academic.date }</p>
            <br />
          </div>
        )
      })
      return academicElement
    }
  })

  return (
    <section className='paginated-div'>

      <div className="pagination">
        {Sections.map((section) => (
          <button
            key={section.id}
            className={`page-button ${section.id === currentPage ? 'active' : ''}`}
            onClick={() => handleClick(section.id)}
          >
            {section.id}
          </button>
        ))}
      </div>

      <div className="content">
        
        {Sections.map((section) => (

          <div key={section.id} className={`page ${section.id === currentPage ? 'active' : ''}`}>
            <h2 className='tituloSections'>{ section.title }</h2>
            
            <br/>
            <br/>

            <p>{ !Array.isArray(section.text) ? section.text : academyHistory }</p>

          </div>

        ))}

      </div>
    </section>
  )

}

export default Section