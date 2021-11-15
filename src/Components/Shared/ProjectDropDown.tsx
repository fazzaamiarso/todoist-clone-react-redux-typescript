import React from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import useToggle from "../../Hooks/useToggle";
import { useTypedDispatch } from "../../Store/hooks";
import { deleteProject } from "../../Store/Task/TaskSlice";
import ProjectForm from "../Forms/ProjectForm";
import Item from "./EditDropDownItem";
import Modal from "./EditDropDownModal";

interface Props {
  onToggleModal: () => void;
  projectId: string;
  projectName: string;
}

const ProjectDropDown: React.FC<Props> = ({
  onToggleModal,
  projectId,
  projectName,
}) => {
  let navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [isEditing, editHandler] = useToggle();

  const deleteProjectHandler = () => {
    navigate("/app/inbox", { replace: true });
    dispatch(deleteProject(projectId));
  };

  return (
    <>
      {isEditing && (
        <ProjectForm projectName={projectName} onClose={editHandler} />
      )}
      <Modal onCancel={onToggleModal}>
        <>
          <Item actionText="Edit project" onEditAction={editHandler} />
          <Item
            actionText="Delete project"
            onEditAction={deleteProjectHandler}
          />
        </>
      </Modal>
    </>
  );
};

export default ProjectDropDown;
