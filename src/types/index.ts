type BaseProps = {
  isActive: boolean;
};

type GeneralProps = BaseProps & {
  name: string;
  email: string;
  phone: string;
};

type GeneralPropsReceived = {
  generalInfo: GeneralProps;
  setGeneralInfo: React.Dispatch<React.SetStateAction<GeneralProps>>;
};

type EducationalProps = BaseProps & {
  companyName: string;
  title: string;
  startingDate: string;
  endingDate: string;
};

type EducationalPropsReceived = {
  educationalInfo: EducationalProps;
  setEducationalInfo: React.Dispatch<React.SetStateAction<EducationalProps>>;
};

export { GeneralPropsReceived, EducationalPropsReceived };
