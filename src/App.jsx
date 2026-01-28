import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo';

export default function App() {
  return (
    <div className="app">
      <div className="left-side">
        <GeneralInfo />
        <EducationalInfo />
      </div>
      <div className="right-side"></div>
    </div>
  );
}
