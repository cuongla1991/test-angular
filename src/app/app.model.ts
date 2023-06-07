export interface Todo {
  id: number | null;
  name: string;
  description: string;
  priority: "low" | "normal" | "high";
  dueDate: string;
  isDone: boolean;
}
