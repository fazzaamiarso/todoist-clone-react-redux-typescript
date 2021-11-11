import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

const HeadBar: React.FC = () => {
  return (
    <Container>
      <LeftAction>
        <Title>
          <span>Project Title</span>
        </Title>
      </LeftAction>
      <RightAction>
        <View>
          <FontAwesomeIcon icon={faSlidersH} />
          <span>View</span>
        </View>
      </RightAction>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h1``;
const LeftAction = styled.div``;
const RightAction = styled.div`
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
