export type TaskStatus = "completed" | "pending" | "overdue";
export type TaskPriority = "low" | "medium" | "high";
export type TaskCategory = "work" | "personal" | "study" | "other";
export type TaskDueDate = Date;

export type Task = {
  id: number;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  dueDate: TaskDueDate | null;
};
