import styled from "styled-components";
import { Project } from "../../../Store/Task/TaskModel";
import CollapseItem from "./CollapseItem";

interface Props {
  isCollapsed: boolean;
  projectList: Project[];
}

const CollapseContent: React.FC<Props> = ({ isCollapsed, projectList }) => {
  return (
    <Container isOpen={!isCollapsed}>
      {projectList.map((proj) => {
        return <CollapseItem projectName={proj.name} allTask={proj.tasks} />;
      })}
    </Container>
  );
};

const Container = styled.ul<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: 0.3s;
`;

export default CollapseContent;
