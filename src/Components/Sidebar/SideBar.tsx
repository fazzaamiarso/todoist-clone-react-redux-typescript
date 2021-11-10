import styled from "styled-components";
import Collapse from "./Collapse/Collapse";
import Upcoming from "./Upcoming";

interface Props {
  isOpen: boolean;
}

type NavType = Props;

const SideBar: React.FC<Props> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Upcoming />
      <Collapse />
    </Container>
  );
};

const Container = styled.nav<NavType>`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;

  background-color: #f7ebeb;
  height: 100vh;
  width: 300px;
  padding-top: 5rem;
  padding-left: 2rem;
  padding-right: 0.25rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s;
`;

export default SideBar;
