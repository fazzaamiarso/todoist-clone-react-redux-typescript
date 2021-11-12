import styled from "styled-components";
import MainContent from "../Components/Main/MainContent";
import { useTypedSelector } from "../Store/hooks";

const Inbox: React.FC = () => {
  const inbox = useTypedSelector((state) => state.task.inbox);

  return (
    <>
      <MainContent project={inbox}>
        <div></div>
      </MainContent>
    </>
  );
};

export default Inbox;
