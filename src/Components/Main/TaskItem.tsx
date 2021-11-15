import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useToggle from "../../Hooks/useToggle";
import TaskForm from "../Forms/TaskForm";
import TaskDropDown from "../Shared/TaskDropDown";

interface Props {
  key: number;
  name: string;
  id: number;
  projectId: string;
  onClick: () => void;
}

const TaskItem: React.FC<Props> = ({ key, name, onClick, id, projectId }) => {
  const [dropdownIsOpen, toggleDropdown] = useToggle();
  const [isEditing, toggleEditing] = useToggle();

  return (
    <Container key={key}>
      {isEditing ? (
        <TaskForm
          onCancel={toggleEditing}
          projectId={projectId}
          taskName={name}
          taskId={id}
          isEditForm
        />
      ) : (
        <>
          <TaskContent>
            <Circle />
            <p>{name}</p>
          </TaskContent>
          <Action>
            {dropdownIsOpen && (
              <TaskDropDown
                taskId={id}
                projectId={projectId}
                onToggleEdit={toggleEditing}
                onToggleDropdown={toggleDropdown}
              />
            )}
            <More onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </More>
          </Action>
        </>
      )}
    </Container>
  );
};
const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const TaskContent = styled.div`
  margin-right: auto;
  display: flex;
  gap: 1rem;
`;
const Action = styled.div`
  position: relative;
`;
const More = styled.button`
  padding: 0.3em;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Circle = styled.div`
  aspect-ratio: 1;
  width: 20px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid lightgray;
`;

export default TaskItem;
