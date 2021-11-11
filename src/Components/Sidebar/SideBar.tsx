import styled, { css } from "styled-components";
import Collapse from "./Collapse/Collapse";
import Upcoming from "./Upcoming";
import CSSTransition from "react-transition-group/CSSTransition";

interface Props {
  isOpen: boolean;
}

interface NavType {
  isOpen: boolean;
}

const SideBar: React.FC<Props> = ({ isOpen }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={0}
      classNames="push"
      unmountOnExit
      mountOnEnter
      appear
    >
      <Container isOpen={isOpen}>
        <Upcoming />
        <Collapse />
      </Container>
    </CSSTransition>
  );
};

const Container = styled.nav<NavType>`
  position: static;
  background-color: #f7ebeb;
  height: 100vh;
  padding-top: 5rem;
  padding-left: 2rem;
  padding-right: 0.25rem;

  align-items: flex-start;
  flex-direction: column;

  &.push-enter-done {
    display: flex;
    width: 300px;
  }

  &.push-exit-active {
    display: none;
  }
  @media screen and (max-width: 650px) {
    position: fixed;
    z-index: 2;
  }
`;

export default SideBar;
