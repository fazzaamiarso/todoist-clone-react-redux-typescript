import styled from "styled-components";
import CollapseItem from "./CollapseItem";

interface Props {
  isCollapsed: boolean;
}

const CollapseContent: React.FC<Props> = ({ isCollapsed }) => {
  return (
    <Container isOpen={!isCollapsed}>
      <CollapseItem />
      <CollapseItem />
    </Container>
  );
};

const Container = styled.ul<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: 0.3s;
`;

export default CollapseContent;
