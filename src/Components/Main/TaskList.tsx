import styled from "styled-components";
import { Project, Task } from "../../Store/Task/TaskModel";

interface Props {
  taskList: Task[];
}

const TaskList: React.FC<Props> = ({ taskList }) => {
  return (
    <Container>
      {taskList.map((task) => {
        return (
          <TaskItem key={task.id}>
            <Circle />
            <p>{task.name}</p>
          </TaskItem>
        );
      })}
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
