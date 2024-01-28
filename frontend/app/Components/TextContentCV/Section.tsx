'use client'

import { useState } from 'react';
import './Section.css';

import ProfileSection from '@/Languages/Interfaces/About/ProfileSection';

const Section: React.FC<{ Sections: ProfileSection[] }> = ({ Sections }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const academyHistory = Sections.map((section) => {
    if (Array.isArray(section.Text)) {
      return section.Text.map((academic) => (
        <div key={academic.Title}>
          <h3>{academic.Title}</h3>
          <br />
          <p>- {academic.Date}</p>
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
            key={section.Id}
            className={`page-button ${section.Id === currentPage ? 'active' : ''}`}
            onClick={() => handleClick(section.Id)}
          >
            {section.Id}
          </button>
        ))}
      </div>

      <div className="content">
        {Sections.map((section) => (
          <div
            key={section.Id}
            className={`page ${section.Id === currentPage ? 'active' : ''}`}
          >
            <h2 className="tituloSections">{section.Title}</h2>
            <br />
            <br />
            <div>
              {!Array.isArray(section.Text) ? (
                <p>{section.Text}</p>
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
