type InputPropType = {
  name: string;
};

export const useInput = ({ name }: InputPropType) => {
  return { name: name };
};

export default useInput;
