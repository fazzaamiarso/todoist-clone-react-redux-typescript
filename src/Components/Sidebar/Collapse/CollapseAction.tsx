import styled from "styled-components";
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onToggle: () => void;
  isCollapsed: boolean;
}
type CollapseBtn = { isOpen: boolean };

const CollapseAction: React.FC<Props> = ({ onToggle, isCollapsed }) => {
  const toggleCollapse = () => {
    onToggle();
  };

  return (
    <Container>
      <CollapseButton onClick={toggleCollapse} isOpen={!isCollapsed}>
        <FontAwesomeIcon icon={faChevronRight} className="icon" />
        <span>Projects</span>
      </CollapseButton>
      <AddButton>
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </AddButton>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  padding-left: 0.5em;
`;

const CollapseButton = styled.button<CollapseBtn>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    font-weight: 700;
  }
  .icon {
    transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
    transition: transform 0.2s;
  }
`;
const AddButton = styled.button`
  margin-left: auto;
  padding: 0.25em 0.5em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .icon {
    color: black;
    transform: scale(1.25);
  }
`;

export default CollapseAction;
