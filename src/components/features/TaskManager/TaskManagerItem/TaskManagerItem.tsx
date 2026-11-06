import { useState, type ChangeEvent } from "react";
import type { Task, TaskStatus } from "../types/task.types";
import TaskManagerItemHeader from "./TaskManagerItemHeader";
import TaskManagerItemActions from "./TaskManagerItemActions";

// !optimizar componente de TaskManagerItem
// !optimizar rutas relativas con @

type TaskManagerItemProps = {
  task: Task;
};

export default function TaskManagerItem({ task }: TaskManagerItemProps) {
  const { status } = task;

  const [statusTask, setStatusTask] = useState<TaskStatus>(status);
  const isChecked = statusTask === "completed";

  function handleIsChecked(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setStatusTask(() => (checked ? "completed" : "pending"));
  }

  return (
    <article className="flex flex-col gap-5 items-center lg:flex-row lg:justify-between">
      <TaskManagerItemHeader
        task={task}
        statusTask={statusTask}
        onChecked={handleIsChecked}
        isChecked={isChecked}
      />

      <TaskManagerItemActions />
    </article>
  );
}
