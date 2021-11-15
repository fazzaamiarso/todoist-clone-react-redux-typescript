import { useState } from "react";

const useToggle: (initState?: boolean) => [boolean, () => void] = (
  state = false
) => {
  const [isOpen, setIsOpen] = useState(state);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggleHandler];
};

export default useToggle;
