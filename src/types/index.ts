interface BaseProps {
  isActive: boolean;
}

interface GeneralProps extends BaseProps {
  name: string;
  email: string;
  phone: string;
}

interface GeneralPropsReceived {
  generalInfo: GeneralProps;
  setGeneralInfo: React.Dispatch<React.SetStateAction<GeneralProps>>;
}

interface EducationalProps extends BaseProps {
  companyName: string;
  title: string;
  startingDate: string;
  endingDate: string;
}

interface EducationalPropsReceived {
  educationalInfo: EducationalProps;
  setEducationalInfo: React.Dispatch<React.SetStateAction<EducationalProps>>;
}

interface PracticalProps extends BaseProps {
  namePractical: string;
  position: string;
  responsibilities: string;
  startingDatePractical: string;
  endingDatePractical: string;
}

interface PracticalPropsReceived {
  practicalExperience: PracticalProps;
  setPracticalExperience: React.Dispatch<React.SetStateAction<PracticalProps>>;
}

interface CvPropsReceived {
  generalInfo: GeneralProps;
  educationalInfo: EducationalProps;
  practicalExperience: PracticalProps;
}

export {
  GeneralPropsReceived,
  EducationalPropsReceived,
  PracticalPropsReceived,
  CvPropsReceived,
};
