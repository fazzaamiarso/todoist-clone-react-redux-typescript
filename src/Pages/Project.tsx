import { useNavigate, useParams } from "react-router-dom";
import MainContent from "../Components/Main/MainContent";
import { useTypedSelector } from "../Store/hooks";
import { Project } from "../Store/Task/TaskModel";

const ProjectPage: React.FC = () => {
  let navigate = useNavigate();
  const { projectId } = useParams();
  const projects = useTypedSelector((state) => state.task.projects);

  const foundProject = projects.find(
    (proj) => proj.id === projectId
  ) as Project;

  if (foundProject === undefined) {
    navigate("/app/inbox", { replace: true });
    return <div></div>;
  }

  return (
    <>
      <MainContent project={foundProject}>
        <div></div>
      </MainContent>
    </>
  );
};

export default ProjectPage;
