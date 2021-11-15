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
    deleteTask: (
      state,
      action: PayloadAction<Pick<Task, "id" | "projectId">>
    ) => {
      const findProject = state.projects.find(
        (proj) => proj.id === action.payload.projectId
      ) as Project;
      findProject.tasks = findProject.tasks.filter(
        (task) => task.id !== action.payload.id
      );
    },
    editTask: (
      state,
      action: PayloadAction<Pick<Task, "id" | "projectId" | "name">>
    ) => {
      const findProject = state.projects.find(
        (proj) => proj.id === action.payload.projectId
      ) as Project;
      const editedTask = findProject.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (findProject === undefined || editedTask === undefined) return;
      editedTask.name = action.payload.name;
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
      state.projects = state.projects.filter(
        (proj) => proj.id !== action.payload
      );
    },
    editProject: (state, action: PayloadAction<Omit<Project, "tasks">>) => {
      const editedProject = state.projects.find(
        (proj) => proj.id === action.payload.id
      );
      if (editedProject === undefined) return;
      editedProject.name = action.payload.name;
    },
  },
});

export const {
  addTask,
  addNewProject,
  deleteProject,
  editProject,
  deleteTask,
  editTask,
} = taskSlice.actions;

export const selectProjects = (state: RootState) => state.task.projects;

export default taskSlice.reducer;
