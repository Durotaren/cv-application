import { useState } from 'react';
import '../styles/PracticalExperience.css';

export default function PracticalExperience() {
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');

  return (
    <form className={`practical-container ${!isActive && 'inactive'}`}>
      <h1>Practical Experience</h1>
      <div>
        <label htmlFor="company-input">Company Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="company-input"
          disabled={!isActive}
        />
      </div>
      <div>
        <label htmlFor="position-input">Position Title</label>
        <input
          type="text"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          id="position-input"
          disabled={!isActive}
        />
      </div>
      <div>
        <label htmlFor="responsibilities-input">Main Responsibilities</label>
        <input
          type="text"
          value={responsibilities}
          onChange={(e) => {
            setResponsibilities(e.target.value);
          }}
          id="responsibilities-input"
          disabled={!isActive}
        />
      </div>
      <div className="employment-dates">
        <div>
          <label htmlFor="employment-date-start">Date From</label>
          <input
            placeholder="e.g., Jan 2020"
            type="number"
            value={startingDate}
            onChange={(e) => {
              setStartingDate(e.target.value);
            }}
            id="employment-date-start"
            disabled={!isActive}
            maxLength={4}
          />
        </div>
        <div>
          <label htmlFor="employment-date-end">Date Until</label>
          <input
            placeholder="e.g., Present"
            type="number"
            value={endingDate}
            onChange={(e) => {
              setEndingDate(e.target.value);
            }}
            id="employment-date-end"
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
