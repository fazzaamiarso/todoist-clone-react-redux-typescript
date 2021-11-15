import styled from "styled-components";
import { Project, Task } from "../../Store/Task/TaskModel";
import TaskItem from "./TaskItem";

interface Props {
  taskList: Task[];
}

const TaskList: React.FC<Props> = ({ taskList }) => {
  return (
    <Container>
      {taskList.map((task) => {
        return (
          <TaskItem
            key={task.id}
            id={task.id}
            projectId={task.projectId}
            name={task.name}
            onClick={() => {}}
          />
        );
      })}
    </Container>
  );
};
const Container = styled.ul``;

export default TaskList;
