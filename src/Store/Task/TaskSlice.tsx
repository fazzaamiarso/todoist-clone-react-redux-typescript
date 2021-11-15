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
      const findProject = state.projects.find((proj) => {
        return proj.id === action.payload.projectId;
      });
      if (findProject === undefined) {
        const inbox = state.inbox;
        const newTask = { ...action.payload, projectId: "inbox" };
        inbox.tasks = [...inbox.tasks, newTask];
      }
      if (findProject) {
        const newTask = {
          ...action.payload,
          projectId: action.payload.projectId,
        };
        findProject.tasks = [...findProject.tasks, newTask];
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
    deleteProject: (state, action: PayloadAction<Project["id"]>) => {
      const findProjectIdx = state.projects.findIndex((proj) => {
        return proj.id === action.payload;
      });
      state.projects.splice(findProjectIdx, 1);
    },
  },
});

export const { addTask, addNewProject, deleteProject } = taskSlice.actions;

export const selectProjects = (state: RootState) => state.task.projects;

export default taskSlice.reducer;
