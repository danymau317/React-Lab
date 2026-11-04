import { useState, type ChangeEvent } from "react";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge/Badge";
import type { Task, TaskStatus } from "./types/task.types";
import { formatDate } from "../../../utils/date";

type TaskManagerItemProps = {
  task: Task;
};

export default function TaskManagerItem({ task }: TaskManagerItemProps) {
  const { name, status, priority, category, dueDate } = task;

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [statusTask, setStatusTask] = useState<TaskStatus>(status);

  function handleisChecked(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    setIsChecked(checked);
    setStatusTask(() => (checked ? "completed" : "pending"));
  }

  return (
    <article className="flex justify-between items-center gap-5">
      <header className="flex flex-col justify-center gap-5 w-[60%]">
        <div className="flex items-center">
          <input
            className="accent-brand-purple w-10 h-5"
            type="checkbox"
            checked={isChecked}
            onChange={handleisChecked}
            name=""
            id=""
          />
          <p className="font-bold text-lg w-[90%]">{name}</p>
        </div>
        <div className="flex gap-5">
          <p className="flex items-center gap-2 ml-2">
            <span className="material-symbols-outlined">calendar_month</span>
            {dueDate && formatDate(dueDate)}
          </p>
          <Badge value={priority} type="priority" />
          <Badge value={category} type="category" />
        </div>
      </header>
      <section className="w-[35%] flex justify-evenly items-center">
        <Badge value={statusTask} type="status" />

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
      </section>
    </article>
  );
}
