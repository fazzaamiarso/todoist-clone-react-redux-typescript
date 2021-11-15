import React from "react";
import { useNavigate } from "react-router";
import { useTypedDispatch } from "../../Store/hooks";
import { deleteProject } from "../../Store/Task/TaskSlice";
import Item from "./EditDropDownItem";
import Modal from "./EditDropDownModal";

interface Props {
  onToggleModal: () => void;
  projectId: string;
}

const ProjectDropDown: React.FC<Props> = ({ onToggleModal, projectId }) => {
  let navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const deleteProjectHandler = () => {
    dispatch(deleteProject(projectId));
    navigate("/app/inbox");
  };

  return (
    <Modal onCancel={onToggleModal}>
      <>
        <Item actionText="Edit project" onEditAction={() => {}} />
        <Item actionText="Delete project" onEditAction={deleteProjectHandler} />
      </>
    </Modal>
  );
};

export default ProjectDropDown;
