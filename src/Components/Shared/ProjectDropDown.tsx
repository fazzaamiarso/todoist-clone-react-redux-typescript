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
  onToggleEdit: () => void;
  projectId: string;
  projectName: string;
}

const ProjectDropDown: React.FC<Props> = ({
  onToggleModal,
  projectId,
  projectName,
  onToggleEdit,
}) => {
  let navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const deleteProjectHandler = () => {
    navigate("/app/inbox", { replace: true });
    dispatch(deleteProject(projectId));
  };

  return (
    <>
      <Modal onCancel={onToggleModal}>
        <>
          <Item actionText="Edit project" onEditAction={onToggleEdit} />
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
