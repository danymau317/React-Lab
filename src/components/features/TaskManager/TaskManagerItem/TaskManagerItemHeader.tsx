import type { Task, TaskStatus } from "../types/task.types";
import type { ChangeEvent } from "react";
import TaskManagerItemDetails from "./TaskManagerItemDetails";

type TaskManagerItemHeaderProps = {
  task: Task;
  statusTask: TaskStatus;
  onChecked: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
};

export default function TaskManagerItemHeader({
  task,
  statusTask,
  onChecked,
  isChecked,
}: TaskManagerItemHeaderProps) {
  const { name, priority, category, dueDate } = task;

  return (
    <header className="w-full flex flex-col justify-center gap-5 lg:w-[60%]">
      <div className="flex items-center lg:justify-start ">
        <input
          className="accent-brand-purple w-14 h-5 lg:w-10 lg:h-5"
          type="checkbox"
          checked={isChecked}
          onChange={onChecked}
          name=""
          id=""
        />
        <p className="font-bold text-lg w-[90%]">{name}</p>
      </div>

      <TaskManagerItemDetails
        dueDate={dueDate}
        statusTask={statusTask}
        priority={priority}
        category={category}
      />
    </header>
  );
}
