export interface Task {
  name: string;
  id: number;
  projectId: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
}

export interface Project {
  name: string;
  id: string;
  tasks: Task[];
}

export interface ProjectState {
  projects: Project[];
}
