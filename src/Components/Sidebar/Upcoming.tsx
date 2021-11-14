import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarDay,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

const Upcoming: React.FC = () => {
  return (
    <Container>
      <NavList>
        <NavItem>
          <NavLink
            className={({ isActive }) => (isActive ? " activated" : "inactive")}
            to="app/inbox"
          >
            <FontAwesomeIcon icon={faInbox} /> Inbox
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={({ isActive }) => (isActive ? " activated" : "inactive")}
            to="app/today"
          >
            <FontAwesomeIcon icon={faCalendarDay} />
            Today
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={({ isActive }) => (isActive ? " activated" : "inactive")}
            to="app/upcoming"
          >
            <FontAwesomeIcon icon={faCalendar} />
            Upcoming
          </NavLink>
        </NavItem>
      </NavList>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
`;
const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavItem = styled.li`
  width: 100%;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-radius: calc(var(--borderRadius) + 2px);
    padding: 0.5rem;
    &.inactive {
      color: black;
    }
    &.activated {
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default Upcoming;
