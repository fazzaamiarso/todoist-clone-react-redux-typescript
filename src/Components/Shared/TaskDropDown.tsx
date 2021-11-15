import Modal from "./EditDropDownModal";
import Item from "./EditDropDownItem";
import React from "react";
import { useTypedDispatch } from "../../Store/hooks";
import { deleteTask } from "../../Store/Task/TaskSlice";

interface Props {
  taskId: number;
  projectId: string;
  onToggleEdit: () => void;
  onToggleDropdown: () => void;
}

const TaskDropDown: React.FC<Props> = ({
  taskId,
  projectId,
  onToggleEdit,
  onToggleDropdown,
}) => {
  const dispatch = useTypedDispatch();

  const toggleEditHandler = () => {
    onToggleEdit();
    onToggleDropdown();
  };

  const deleteTaskHandler = () => {
    dispatch(deleteTask({ projectId, id: taskId }));
  };

  return (
    <Modal onCancel={() => {}}>
      <>
        <Item actionText="Edit task" onEditAction={toggleEditHandler}></Item>
        <Item actionText="Delete task" onEditAction={deleteTaskHandler}></Item>
      </>
    </Modal>
  );
};

export default TaskDropDown;
