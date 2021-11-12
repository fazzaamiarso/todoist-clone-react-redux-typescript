import { useState } from "react";
import styled from "styled-components";
import { useTypedSelector } from "../../../Store/hooks";
import CollapseAction from "./CollapseAction";
import CollapseContent from "./CollapseContent";

const Collapse: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { projects: projectList } = useTypedSelector((state) => state.task);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Container>
      <CollapseAction onToggle={toggleCollapse} isCollapsed={isCollapsed} />
      <CollapseContent isCollapsed={isCollapsed} projectList={projectList} />
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Collapse;
