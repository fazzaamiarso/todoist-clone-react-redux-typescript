import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewTaskSection: React.FC = () => {
  return (
    <Container>
      <AddButton>
        <FontAwesomeIcon icon={faPlus} className="icon" />
        <span>Add Task</span>
      </AddButton>
    </Container>
  );
};

const Container = styled.section``;
const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  padding: 1rem 0.5rem;
  color: lightgray;
  &:hover {
    color: var(--primaryColor);
  }
`;

export default NewTaskSection;
