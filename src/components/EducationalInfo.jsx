import { useState } from 'react';
import '../styles/EducationalInfo.css';

export default function EducationalInfo({
  educationalInfo,
  setEducationalInfo,
}) {
  const { isActive, name, title, startingDate, endingDate } = educationalInfo;

  function handleChange(e) {
    const { name, value } = e.target;

    setEducationalInfo((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <form className={`educational-container ${!isActive && 'inactive'}`}>
      <h1>Educational Experience</h1>
      <div>
        <label htmlFor="school-input">School Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          id="school-input"
          disabled={!isActive}
        />
      </div>
      <div>
        <label htmlFor="title-input">Title of Study</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={handleChange}
          id="title-input"
          disabled={!isActive}
        />
      </div>
      <div className="education-dates">
        <div>
          <label htmlFor="school-date-start">Date of Study</label>
          <input
            name="startingDate"
            placeholder="e.g., 2015"
            type="number"
            value={startingDate}
            onChange={handleChange}
            id="school-date-start"
            disabled={!isActive}
            min={1960}
            max={new Date().getFullYear()}
          />
        </div>
        <div>
          <label htmlFor="school-date-end">Date of Study</label>
          <input
            name="endingDate"
            placeholder="e.g., 2019"
            type="number"
            value={endingDate}
            onChange={handleChange}
            id="school-date-end"
            disabled={!isActive}
            min={1960}
            max={new Date().getFullYear()}
          />
        </div>
      </div>
      {isActive ? (
        <button
          className="submit-btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setEducationalInfo((prev) => ({ ...prev, isActive: false }));
          }}
        >
          Submit
        </button>
      ) : (
        <button
          className="edit-btn"
          onClick={(e) => {
            e.preventDefault();
            setEducationalInfo((prev) => ({ ...prev, isActive: true }));
          }}
        >
          Edit
        </button>
      )}
    </form>
  );
}
