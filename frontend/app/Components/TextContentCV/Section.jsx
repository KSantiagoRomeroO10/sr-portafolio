'use client'

import { useState } from 'react';
import './Section.css'

const Section = ( {Sections} ) => {
    
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <h2>{ section.title }</h2>
            
            <br/>
            <hr/>
            <br/>

            <p>{ section.text }</p>
          </div>

        ))}

      </div>
    </section>
  )

}

export default Section;