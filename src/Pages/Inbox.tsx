import styled from "styled-components";
import MainContent from "../Components/Main/MainContent";
import { useTypedSelector } from "../Store/hooks";
import { Project } from "../Store/Task/TaskModel";

const Inbox: React.FC = () => {
  const projects = useTypedSelector((state) => state.task.projects);
  const inbox = projects.find((proj) => proj.id === "inbox");

  return (
    <>
      <MainContent project={inbox ?? ({} as Project)}>
        <div></div>
      </MainContent>
    </>
  );
};

export default Inbox;
