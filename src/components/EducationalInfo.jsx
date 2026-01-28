import { useState } from 'react';
import '../styles/EducationalInfo.css';

export default function EducationalInfo() {
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');

  return (
    <form className={`educational-container ${isActive ? '' : 'inactive'}`}>
      <h1>Educational Experience</h1>
      <div>
        <label htmlFor="school-input">School Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="school-input"
          disabled={!isActive}
        />
      </div>
      <div>
        <label htmlFor="title-input">Title of Study</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="title-input"
          disabled={!isActive}
        />
      </div>
      <div className="education-dates">
        <div>
          <label htmlFor="school-date-start">Date of Study</label>
          <input
            placeholder="e.g., 2015"
            type="number"
            value={startingDate}
            onChange={(e) => {
              setStartingDate(e.target.value);
            }}
            id="school-date-start"
            disabled={!isActive}
            maxLength={4}
          />
        </div>
        <div>
          <label htmlFor="school-date-end">Date of Study</label>
          <input
            placeholder="e.g., 2019"
            type="number"
            value={endingDate}
            onChange={(e) => {
              setEndingDate(e.target.value);
            }}
            id="school-date-end"
            disabled={!isActive}
            maxLength={4}
          />
        </div>
      </div>
      {isActive ? (
        <button
          className="submit-btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setIsActive(false);
          }}
        >
          Submit
        </button>
      ) : (
        <button
          className="edit-btn"
          onClick={(e) => {
            e.preventDefault();
            setIsActive(true);
          }}
        >
          Edit
        </button>
      )}
    </form>
  );
}
