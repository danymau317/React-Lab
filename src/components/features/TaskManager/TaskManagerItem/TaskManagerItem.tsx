import { useState, type ChangeEvent } from "react";
import Button from "../../../ui/Button";
import Badge from "../../../ui/Badge/Badge";
import type { Task, TaskStatus } from "../types/task.types";
import { formatDate } from "../../../../utils/date";

// !optimizar componente de TaskManagerItem
// !optimizar rutas relativas con @

type TaskManagerItemProps = {
  task: Task;
};

export default function TaskManagerItem({ task }: TaskManagerItemProps) {
  const { name, status, priority, category, dueDate } = task;

  const [statusTask, setStatusTask] = useState<TaskStatus>(status);
  const isChecked = statusTask === "completed";

  function handleIsChecked(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setStatusTask(() => (checked ? "completed" : "pending"));
  }

  return (
    <article className="flex flex-col gap-5 items-center lg:flex-row lg:justify-between">
      <header className="w-full flex flex-col justify-center gap-5 lg:w-[60%]">
        <div className="flex items-center lg:justify-start ">
          <input
            className="accent-brand-purple w-14 h-5 lg:w-10 lg:h-5"
            type="checkbox"
            checked={isChecked}
            onChange={handleIsChecked}
            name=""
            id=""
          />
          <p className="font-bold text-lg w-[90%]">{name}</p>
        </div>
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5 lg:items-start">
          <p className="flex items-center gap-2 ml-2 self-start lg:self-center">
            <span className="material-symbols-outlined">calendar_month</span>
            {dueDate && formatDate(dueDate)}
          </p>
          <div className="w-[60%] flex flex-col gap-2 sm:flex-row sm:self-start lg:w-auto">
            <Badge value={priority} type="priority" />
            <Badge value={category} type="category" />
            <Badge value={statusTask} type="status" />
          </div>
        </div>
      </header>
      <section className="w-full flex flex-col items-center gap-5 lg:w-[35%] lg:flex-row lg:justify-evenly">
        <div className="w-full flex justify-between sm:justify-center sm:gap-10 lg:justify-start lg:gap-5">
          <Button
            value="Edit"
            icon="edit"
            className="border-2 border-brand-border text-text-purple-primary bg-brand-purple-opacity-80"
            onClick={() => {}}
          />
          <Button
            value="Delete"
            icon="delete"
            className="bg-button-delete text-text-secondary"
            onClick={() => {}}
          />
        </div>
      </section>
    </article>
  );
}
