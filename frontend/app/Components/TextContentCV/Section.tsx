'use client'

import { useState } from 'react';
import './Section.css';

import { AcademicHistory } from '@/app/Sections'

interface SectionData {
  id: number;
  title: string;
  text: string | AcademicHistory[];
}

const Section: React.FC<{ Sections: SectionData[] }> = ({ Sections }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const academyHistory = Sections.map((section) => {
    if (Array.isArray(section.text)) {
      return section.text.map((academic) => (
        <div key={academic.tittle}>
          <h3>{academic.tittle}</h3>
          <p>{academic.date}</p>
          <br />
        </div>
      ));
    } else {
      return null;
    }
  });

  return (
    <section className="paginated-div">
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
          <div
            key={section.id}
            className={`page ${section.id === currentPage ? 'active' : ''}`}
          >
            <h2 className="tituloSections">{section.title}</h2>
            <br />
            <br />
            <div>
              {!Array.isArray(section.text) ? (
                section.text
              ) : (
                academyHistory
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
