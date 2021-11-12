import React, { useState } from "react";
import styled from "styled-components";
import { useTypedDispatch } from "../../Store/hooks";
import { addTask } from "../../Store/Task/TaskSlice";
import FormButton from "./FormButton";

interface Props {
  projectId: string;
  onCancel: () => void;
}

const TaskForm: React.FC<Props> = ({ onCancel, projectId }) => {
  const dispatch = useTypedDispatch();
  const [taskInput, setTaskInput] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCancel();
    if (taskInput === "") return alert("hi");

    dispatch(
      addTask({
        name: taskInput,
        id: Math.random(),
        projectId,
        completed: false,
        createdAt: new Date(),
      })
    );
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  return (
    <Form action="#" onSubmit={submitHandler}>
      <TaskInput
        type="text"
        placeholder="Input your task here"
        onChange={changeHandler}
        value={taskInput}
      />
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
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.75rem;
`;
const FormAction = styled.div``;

export default TaskForm;
