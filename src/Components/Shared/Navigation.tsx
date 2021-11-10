import { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";

const Navigation: React.FC = () => {
  const [barIsOpen, setBarIsOpen] = useState(false);

  const toggleBarHandler = () => {
    setBarIsOpen(!barIsOpen);
  };
  return (
    <>
      <Header onToggle={toggleBarHandler} />
      <SideBar isOpen={barIsOpen} />
    </>
  );
};

export default Navigation;
