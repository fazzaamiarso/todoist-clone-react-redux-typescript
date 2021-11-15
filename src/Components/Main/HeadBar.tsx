import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import ProjectDropDown from "../Shared/ProjectDropDown";
import { useState } from "react";

interface Props {
  projectName: string;
  projectId: string;
}

const HeadBar: React.FC<Props> = ({ projectName, projectId }) => {
  const [editIsOpen, setEditIsOpen] = useState(false);

  const toggleEdit = () => {
    setEditIsOpen(!editIsOpen);
  };

  return (
    <Container>
      <LeftAction>
        <Title>
          <span>{projectName}</span>
        </Title>
      </LeftAction>
      <RightAction>
        <View>
          <FontAwesomeIcon icon={faSlidersH} />
          <span>View</span>
        </View>
        <View onClick={toggleEdit}>
          <FontAwesomeIcon icon={faEllipsisH} size="2x" />
        </View>
      </RightAction>
      {editIsOpen && (
        <ProjectDropDown
          onToggleModal={toggleEdit}
          projectId={projectId}
          projectName={projectName}
        />
      )}
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h1``;
const LeftAction = styled.div``;
const RightAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-left: auto;
`;
const View = styled.button`
  padding: 0.3em;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default HeadBar;
