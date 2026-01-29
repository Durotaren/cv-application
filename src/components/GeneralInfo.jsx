import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const { isActive, name, email, phone } = generalInfo;

  function handleChange(e) {
    const { name, value } = e.target;

    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="general-container">
      <div className="general-heading">
        <h1>CV Builder</h1>
        <p>Fill out the sections below to create your professional CV</p>
      </div>
      <form className={`formContainer ${!isActive && 'inactive'}`}>
        <h1>General Information</h1>
        <div>
          <label htmlFor="name-input">Name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            id="name-input"
            disabled={!isActive}
            required
          />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            id="email-input"
            disabled={!isActive}
            required
          />
        </div>
        <div>
          <label htmlFor="phone-input">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            id="phone-input"
            disabled={!isActive}
            required
          />
        </div>
        {isActive ? (
          <button
            className="submit-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setGeneralInfo((prev) => ({ ...prev, isActive: false }));
            }}
          >
            Submit
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={(e) => {
              e.preventDefault();
              setGeneralInfo((prev) => ({ ...prev, isActive: true }));
            }}
          >
            Edit
          </button>
        )}
      </form>
    </div>
  );
}
