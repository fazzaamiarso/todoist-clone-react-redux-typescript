import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

interface Props {
  projectName: string;
  allTask: unknown;
}

const CollapseItem: React.FC = () => {
  return (
    <Container>
      <LeftIndicator>
        <Circle />
      </LeftIndicator>
      <ProjectName>Welcome!!</ProjectName>
      <RightIndicator>
        <TaskCount>7</TaskCount>
        <ProjectButton>
          <FontAwesomeIcon icon={faEllipsisH} />
        </ProjectButton>
      </RightIndicator>
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
