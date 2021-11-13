import MainContent from "../Components/Main/MainContent";
import { useTypedSelector } from "../Store/hooks";

const Project: React.FC = () => {
  const inbox = useTypedSelector((state) => state.task.inbox);

  return (
    <>
      <MainContent project={inbox}>
        <div></div>
      </MainContent>
    </>
  );
};

export default Project;
