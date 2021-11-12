import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ProjectState, Task } from "./TaskModel";

const initialState = {
  projects: [{ name: "inbox", id: "inbox", tasks: [] }],
} as ProjectState;

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const findProjectIdx = state.projects.findIndex((proj) => {
        proj.id === action.payload.projectId;
      });
      if (findProjectIdx === -1) {
        const inbox = state.projects.find((proj) => proj.id === "inbox");
        if (inbox === undefined) return;
        const newTask = { ...action.payload, projectId: "inbox" };
        inbox.tasks = [...inbox.tasks, newTask];
      }
    },
  },
});

export const { addTask } = taskSlice.actions;

export const selectProjects = (state: RootState) => state.task.projects;

export default taskSlice.reducer;
