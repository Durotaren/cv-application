import '../styles/CvOutput.css';
import emailSvg from '../assets/images/email.svg';

export default function CvOutput({
  generalInfo,
  educationalInfo,
  practicalExperience,
}) {
  const { name, email, phone } = generalInfo;
  const { companyName, title, startingDate, endingDate } = educationalInfo;
  const {
    namePractical,
    position,
    responsibilities,
    startingDatePractical,
    endingDatePractical,
  } = practicalExperience;

  function printAsPdf() {
    window.print();
  }

  return (
    <div className="cv-preview-container">
      <div className="preview-heading">
        <div>
          <h1>CV Preview</h1>
          <p className="preview-para">Preview what your CV looks like</p>
        </div>
        <button onClick={printAsPdf}>Download as PDF</button>
      </div>
      <div className="cv-preview">
        <div className="general-preview container">
          <h1 className="general-name">{name}</h1>
          {email === '' ? (
            <p className="general-email">{email}</p>
          ) : (
            <div className="holder">
              <img src={emailSvg} alt="Email Icon" width={24} />
              <p className="general-email">{email}</p>
            </div>
          )}
          {phone === '' ? (
            <p className="general-phone">{phone}</p>
          ) : (
            <div className="holder">
              <img src={emailSvg} alt="Email Icon" width={24} />
              <p className="general-phone">{phone}</p>
            </div>
          )}
        </div>
        {name !== '' && companyName !== '' ? <div className="line"></div> : ''}
        <div className="educational-preview container">
          <h1>{companyName}</h1>
          <p>{title}</p>
          {endingDate === '' ? (
            <p>{startingDate}</p>
          ) : (
            <div className="holder">
              <p>{`${startingDate} -`}</p>
              <p>{endingDate}</p>
            </div>
          )}
        </div>
        {companyName !== '' && namePractical !== '' ? (
          <div className="line"></div>
        ) : (
          ''
        )}
        <div className="practical-preview container">
          <h1>{namePractical}</h1>
          <p>{position}</p>
          <p>{responsibilities}</p>
          {endingDatePractical === '' ? (
            <p>{startingDatePractical}</p>
          ) : (
            <div className="holder">
              <p>{`${startingDatePractical} -`}</p>
              <p>{endingDatePractical}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
