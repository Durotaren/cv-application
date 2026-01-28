import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className="general-heading">
        <h1>CV Builder</h1>
        <p>Fill out the sections below to create your professional CV</p>
      </div>
      <form className={`generalContainer ${isActive ? '' : 'inactive'}`}>
        <h1>General Information</h1>
        <div>
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input type="email" id="email-input" />
        </div>
        <div>
          <label htmlFor="phone-input">Phone Number</label>
          <input type="tel" id="phone-input" />
        </div>
        <button type="sumbit">Submit</button>
      </form>
    </>
  );
}
