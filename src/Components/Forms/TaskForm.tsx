import React, { useState } from "react";
import styled from "styled-components";
import { useTypedDispatch } from "../../Store/hooks";
import { addTask, editTask } from "../../Store/Task/TaskSlice";
import FormButton from "./FormButton";

interface Props {
  projectId: string;
  taskId: number;
  onCancel: () => void;
  taskName?: string;
  isEditForm?: boolean;
}

const TaskForm: React.FC<Props> = ({
  onCancel,
  projectId,
  taskName,
  isEditForm,
  taskId,
}) => {
  const dispatch = useTypedDispatch();
  const [taskInput, setTaskInput] = useState(taskName || "");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCancel();
    if (taskInput === "") return alert("Please Input something");
    if (isEditForm) {
      return await dispatch(
        editTask({ name: taskInput, id: taskId, projectId })
      );
    }

    if (!isEditForm) {
      await dispatch(
        addTask({
          name: taskInput,
          id: Math.random(),
          projectId,
          completed: false,
          createdAt: new Date(),
        })
      );
    }
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
          content={isEditForm ? "Save" : "Add Task"}
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
