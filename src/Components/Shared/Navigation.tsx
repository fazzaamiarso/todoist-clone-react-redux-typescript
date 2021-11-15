import { useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";

interface Props {
  children?: JSX.Element;
}

const Navigation: React.FC<Props> = ({ children }) => {
  const [barIsOpen, setBarIsOpen] = useState(false);

  const toggleBarHandler = () => {
    setBarIsOpen(!barIsOpen);
  };
  return (
    <>
      <Header onToggle={toggleBarHandler} />
      <Wrapper isOpen={barIsOpen}>
        <SideBar isOpen={barIsOpen} />
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;

  .overlay {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

export default Navigation;
