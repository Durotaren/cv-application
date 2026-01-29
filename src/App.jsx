import { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo';
import PracticalExperience from './components/PracticalExperience';
import CvOutput from './components/CvOutput';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    isActive: true,
    name: '',
    email: '',
    phone: '',
  });

  const [educationalInfo, setEducationalInfo] = useState({
    isActive: true,
    companyName: '',
    title: '',
    startingDate: '',
    endingDate: '',
  });

  const [practicalExperience, setPracticalExperience] = useState({
    isActive: true,
    namePractical: '',
    position: '',
    responsibilities: '',
    startingDatePractical: '',
    endingDatePractical: '',
  });

  return (
    <div className="app">
      <div className="left-side">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <EducationalInfo
          educationalInfo={educationalInfo}
          setEducationalInfo={setEducationalInfo}
        />
        <PracticalExperience
          practicalExperience={practicalExperience}
          setPracticalExperience={setPracticalExperience}
        />
      </div>
      <div className="right-side">
        <CvOutput
          generalInfo={generalInfo}
          educationalInfo={educationalInfo}
          practicalExperience={practicalExperience}
        />
      </div>
    </div>
  );
}
