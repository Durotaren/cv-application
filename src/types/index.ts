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

export { GeneralPropsReceived };
