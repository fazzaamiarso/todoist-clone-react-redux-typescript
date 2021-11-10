import { useState } from "react";
import styled from "styled-components";
import CollapseAction from "./CollapseAction";
import CollapseContent from "./CollapseContent";

const Collapse: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Container>
      <CollapseAction onToggle={toggleCollapse} isCollapsed={isCollapsed} />
      <CollapseContent />
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Collapse;
