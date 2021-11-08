import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faSignOutAlt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const Navigation: React.FC = () => {
  return (
    <NavBar>
      <PageList>
        <li>
          <FontAwesomeIcon icon={faHome} /> <a href="#">Dashboard</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faProjectDiagram} /> <a href="#">Projects</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faTasks} /> <a href="#">All Tasks</a>
        </li>
      </PageList>
      <Logout href="#">
        {" "}
        <FontAwesomeIcon icon={faSignOutAlt} />
        Logout
      </Logout>
    </NavBar>
  );
};

const NavBar = styled.nav`
  height: 100vh;
  width: 15%;
  background-color: salmon;
  padding-block: 1.5rem;

  display: flex;
  flex-direction: column;
`;
const PageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    width: 100%;
  }
  a {
    width: 100%;
  }
`;
const Logout = styled.a`
  display: block;
  margin-top: auto;
`;

export default Navigation;
