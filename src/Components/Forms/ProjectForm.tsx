import React, { useState } from "react";
import styled from "styled-components";
import { useTypedDispatch } from "../../Store/hooks";
import { addTask } from "../../Store/Task/TaskSlice";
import ModalBase from "../Shared/ModalBase";
import FormButton from "./FormButton";

interface Props {
  onCancel: () => void;
}

const ProjectForm: React.FC = () => {
  const dispatch = useTypedDispatch();
  const [projectInput, setProjectInput] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (projectInput === "") return alert("hi");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectInput(e.target.value);
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
          <FormButton content="Cancel" BtnType="secondary" disabled={false} />
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
