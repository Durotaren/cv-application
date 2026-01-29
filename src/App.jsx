import { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo';
import PracticalExperience from './components/PracticalExperience';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    isActive: true,
    name: '',
    email: '',
    phone: '',
  });

  const [educationalInfo, setEducationalInfo] = useState({
    isActive: true,
    name: '',
    title: '',
    startingDate: '',
    endingDate: '',
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
        <PracticalExperience />
      </div>
      <div className="right-side"></div>
    </div>
  );
}
