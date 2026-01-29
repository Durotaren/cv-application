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

  return (
    <div className="app">
      <div className="left-side">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <EducationalInfo />
        <PracticalExperience />
      </div>
      <div className="right-side"></div>
    </div>
  );
}
