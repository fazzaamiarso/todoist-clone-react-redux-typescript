import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../../Store/Task/TaskModel";
import { useNavigate } from "react-router-dom";
import useToggle from "../../../Hooks/useToggle";
import ProjectDropDown from "../../Shared/ProjectDropDown";

interface Props {
  projectName: string;
  projectId: string;
  allTask: Task[];
}

const CollapseItem: React.FC<Props> = ({ projectName, allTask, projectId }) => {
  const [modalIsOpen, toggleModal] = useToggle();

  let navigate = useNavigate();

  const goToPage = () => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Container onClick={goToPage}>
      <LeftIndicator>
        <Circle />
      </LeftIndicator>
      <ProjectName>{projectName}</ProjectName>
      <RightIndicator>
        <TaskCount>{allTask.length > 0 ? allTask.length : ""}</TaskCount>
        <ProjectButton onClick={toggleModal}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </ProjectButton>
      </RightIndicator>
      {modalIsOpen && (
        <ProjectDropDown
          onToggleModal={toggleModal}
          projectId={projectId}
          projectName={projectName}
        />
      )}
    </Container>
  );
};
const TaskCount = styled.span``;
const ProjectButton = styled.button`
  display: none;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const Container = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.6rem 1rem;
  border-radius: calc(var(--borderRadius) + 2px);

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);

    ${TaskCount} {
      display: none;
    }
    ${ProjectButton} {
      display: inline-block;
    }
  }
`;
const ProjectName = styled.div`
  display: flex;
  align-items: center;
`;
const RightIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

const LeftIndicator = styled.div``;
const Circle = styled.div`
  aspect-ratio: 1;
  width: 10px;
  border-radius: 50%;
  background-color: red;
`;

export default CollapseItem;
