import React, { useState } from "react";
import styled from "styled-components";
import { useTypedDispatch } from "../../Store/hooks";
import { addNewProject, editProject } from "../../Store/Task/TaskSlice";
import ModalBase from "../Shared/ModalBase";
import FormButton from "./FormButton";

interface Props {
  projectName: string;
  projectId: string;
  onClose: () => void;
  isEditForm?: boolean;
}

const ProjectForm: React.FC<Props> = ({
  onClose,
  projectName,
  isEditForm,
  projectId,
}) => {
  const dispatch = useTypedDispatch();
  const [projectInput, setProjectInput] = useState(projectName || "");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    if (projectInput === "") return;
    if (isEditForm) {
      return dispatch(editProject({ name: projectInput, id: projectId }));
    }
    dispatch(addNewProject(projectInput));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectInput(e.target.value);
  };

  return (
    <ModalBase>
      <Form action="#" onSubmit={submitHandler}>
        <h2>{isEditForm ? "Edit Project" : "Add Project"} </h2>
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
            onClick={onClose}
          />
          <FormButton
            content={isEditForm ? "Save" : "Add"}
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
