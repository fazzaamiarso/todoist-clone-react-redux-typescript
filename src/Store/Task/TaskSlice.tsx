import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Project, ProjectState, Task } from "./TaskModel";

const initialState: ProjectState = {
  projects: [],
  inbox: { name: "inbox", id: "inbox", tasks: [] },
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const findProjectIdx = state.projects.findIndex((proj) => {
        return proj.id === action.payload.projectId;
      });
      if (findProjectIdx === -1) {
        const inbox = state.inbox;
        const newTask = { ...action.payload, projectId: "inbox" };
        inbox.tasks = [...inbox.tasks, newTask];
      }
      if (findProjectIdx >= 0) {
        const project = state.projects[findProjectIdx];
        const newTask = {
          ...action.payload,
          projectId: action.payload.projectId,
        };
        project.tasks = [...project.tasks, newTask];
      }
    },
    addNewProject: (state, action: PayloadAction<Project["name"]>) => {
      const newProject = {
        name: action.payload,
        id: action.payload,
        tasks: [],
      } as Project;
      state.projects = [...state.projects, newProject];
    },
  },
});

export const { addTask, addNewProject } = taskSlice.actions;

export const selectProjects = (state: RootState) => state.task.projects;

export default taskSlice.reducer;
