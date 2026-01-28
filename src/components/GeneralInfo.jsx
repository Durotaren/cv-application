import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo() {
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="general-container">
      <div className="general-heading">
        <h1>CV Builder</h1>
        <p>Fill out the sections below to create your professional CV</p>
      </div>
      <form className={`formContainer ${isActive ? '' : 'inactive'}`}>
        <h1>General Information</h1>
        <div>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name-input"
            disabled={!isActive}
          />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email-input"
            disabled={!isActive}
          />
        </div>
        <div>
          <label htmlFor="phone-input">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            id="phone-input"
            disabled={!isActive}
          />
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
    </div>
  );
}
