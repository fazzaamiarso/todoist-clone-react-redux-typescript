import React from "react";
import styled from "styled-components";
import FormButton from "./FormButton";

interface Props {
  onCancel: () => void;
}

const TaskForm: React.FC<Props> = ({ onCancel }) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("hi");
  };

  return (
    <Form action="#" onSubmit={submitHandler}>
      <TaskInput type="text" placeholder="Input your task here" />
      <FormAction>
        <FormButton
          content="Add Task"
          BtnType="main"
          disabled={false}
          type="submit"
        />
        <FormButton
          content="Cancel"
          BtnType="secondary"
          onClick={onCancel}
          disabled={false}
        />
      </FormAction>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
`;
const TaskInput = styled.input`
  border: 1px solid black;
`;
const FormAction = styled.div``;

export default TaskForm;
