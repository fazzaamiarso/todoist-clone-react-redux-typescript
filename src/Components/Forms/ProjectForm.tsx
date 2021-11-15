import React, { useState } from "react";
import styled from "styled-components";
import { useTypedDispatch } from "../../Store/hooks";
import { addTask, addNewProject } from "../../Store/Task/TaskSlice";
import ModalBase from "../Shared/ModalBase";
import FormButton from "./FormButton";

interface Props {
  projectName?: string;
  onClose: () => void;
}

const ProjectForm: React.FC<Props> = ({ onClose, projectName }) => {
  const dispatch = useTypedDispatch();
  const [projectInput, setProjectInput] = useState(projectName || "");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    if (projectInput === "") return;

    dispatch(addNewProject(projectInput));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectInput(e.target.value);
  };
  const closeModalHandler = () => {
    onClose();
  };

  return (
    <ModalBase>
      <Form action="#" onSubmit={submitHandler}>
        <h2>Add Project</h2>
        <TaskInput
          type="text"
          placeholder="Project Name"
          onChange={changeHandler}
          value={projectInput}
        />
        <FormAction>
          <FormButton
            content="Cancel"
            BtnType="secondary"
            disabled={false}
            onClick={closeModalHandler}
          />
          <FormButton
            content="Add"
            BtnType="main"
            disabled={false}
            type="submit"
          />
        </FormAction>
      </Form>
    </ModalBase>
  );
};

const Form = styled.form`
  width: 100%;
`;
const TaskInput = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.75rem;
`;
const FormAction = styled.div``;

export default ProjectForm;
