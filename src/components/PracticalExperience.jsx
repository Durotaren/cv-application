import '../styles/PracticalExperience.css';

export default function PracticalExperience({
  practicalExperience,
  setPracticalExperience,
}) {
  const {
    isActive,
    namePractical,
    position,
    responsibilities,
    startingDatePractical,
    endingDatePractical,
  } = practicalExperience;

  function handleChange(e) {
    const { name, value } = e.target;

    setPracticalExperience((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form className={`practical-container ${!isActive && 'inactive'}`}>
      <h1>Practical Experience</h1>
      <div>
        <label htmlFor="company-input">Company Name</label>
        <input
          name="namePractical"
          type="text"
          value={namePractical}
          onChange={handleChange}
          id="company-input"
          disabled={!isActive}
        />
      </div>
      <div>
        <label htmlFor="position-input">Position Title</label>
        <input
          name="position"
          type="text"
          value={position}
          onChange={handleChange}
          id="position-input"
          disabled={!isActive}
        />
      </div>
      <div>
        <label htmlFor="responsibilities-input">Main Responsibilities</label>
        <textarea
          name="responsibilities"
          type="text"
          value={responsibilities}
          onChange={handleChange}
          id="responsibilities-input"
          disabled={!isActive}
        />
      </div>
      <div className="employment-dates">
        <div>
          <label htmlFor="employment-date-start">Date From</label>
          <input
            name="startingDatePractical"
            placeholder="e.g., Jan 2020"
            type="number"
            value={startingDatePractical}
            onChange={handleChange}
            id="employment-date-start"
            disabled={!isActive}
            maxLength={4}
          />
        </div>
        <div>
          <label htmlFor="employment-date-end">Date Until</label>
          <input
            name="endingDatePractical"
            placeholder="e.g., Present"
            type="number"
            value={endingDatePractical}
            onChange={handleChange}
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
            setPracticalExperience((prev) => ({ ...prev, isAcitve: false }));
          }}
        >
          Submit
        </button>
      ) : (
        <button
          className="edit-btn"
          onClick={(e) => {
            e.preventDefault();
            setPracticalExperience((prev) => ({ ...prev, isAcitve: false }));
          }}
        >
          Edit
        </button>
      )}
    </form>
  );
}
