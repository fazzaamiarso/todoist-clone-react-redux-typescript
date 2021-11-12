import styled from "styled-components";

const TaskList: React.FC = () => {
  return (
    <Container>
      <TaskItem>
        <Circle />
        <p>Task Name</p>
      </TaskItem>
      <TaskItem>
        <Circle />
        <p>Task Name</p>
      </TaskItem>
    </Container>
  );
};
const Container = styled.ul``;
const TaskItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Circle = styled.div`
  aspect-ratio: 1;
  width: 20px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid lightgray;
`;

export default TaskList;
