import styled from "styled-components";
import HeadBar from "./HeadBar";
import NewTaskSection from "./NewTaskSection";
import TaskList from "./TaskList";

interface Props {
  children: JSX.Element;
}

const MainContent: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Container>
        <HeadBar />
        <TaskList />
        <NewTaskSection />
        {children}
      </Container>
      <Overlay className="overlay" />
    </>
  );
};

const Overlay = styled.div`
  @media screen and (max-width: 650px) {
    position: fixed;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const Container = styled.main`
  border-inline: 1px solid red;
  width: min(100%, 850px);
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding-top: 5rem;
  margin-inline: auto;
  padding-inline: 2rem;
`;

export default MainContent;
