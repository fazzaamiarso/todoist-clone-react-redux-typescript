import styled from "styled-components";
import ModalBase from "../Shared/ModalBase";
import TaskForm from "../Forms/TaskForm";
import React from "react";
import { useLocation } from "react-router";

interface Props {
  onToggleModal: () => void;
}

const QuickAddModal: React.FC<Props> = ({ onToggleModal }) => {
  let location = useLocation();
  const currentLocationMatch = location.pathname.match(/(\/\w+)$/);
  const matchedLocation =
    currentLocationMatch === null ? "inbox" : currentLocationMatch[0].slice(1);

  const toggleModalHandler = () => {
    onToggleModal();
  };

  return (
    <ModalBase>
      <TaskForm projectId={matchedLocation} onCancel={toggleModalHandler} />
    </ModalBase>
  );
};

export default QuickAddModal;
