import styled from "styled-components";
import { faHome, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Helpers/Icon";
import { useNavigate } from "react-router-dom";

interface Props {
  onToggle: () => void;
}

const Header: React.FC<Props> = ({ onToggle }) => {
  let navigate = useNavigate();
  const openBarHandler = () => {
    onToggle();
  };

  const goToHomeHandler = () => {
    navigate("/");
  };

  return (
    <Container>
      <BarSection>
        <HeadingIcon
          iconSource={faBars}
          className="icon__wrapper"
          onClick={openBarHandler}
        />
        <HeadingIcon
          iconSource={faHome}
          className="icon__wrapper"
          onClick={goToHomeHandler}
        />
      </BarSection>
      <BarSection>
        <HeadingIcon iconSource={faPlus} className="icon__wrapper" />
        <Avatar />
      </BarSection>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primaryColor);
  padding: 0.5rem 2rem;
`;

const Avatar = styled.div`
  aspect-ratio: 1;
  width: 30px;
  border-radius: 50%;
  background-color: white;
`;

const BarSection = styled.section`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

const HeadingIcon = styled(Icon)`
  &.icon__wrapper {
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;

export default Header;
