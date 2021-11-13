import { useParams } from "react-router";
import MainContent from "../Components/Main/MainContent";
import { useTypedSelector } from "../Store/hooks";
import { Project } from "../Store/Task/TaskModel";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams();
  const projects = useTypedSelector((state) => state.task.projects);

  const foundProject = projects.find(
    (proj) => proj.id === projectId
  ) as Project;

  return (
    <>
      <MainContent project={foundProject}>
        <div></div>
      </MainContent>
    </>
  );
};

export default ProjectPage;
