import { useState, type ChangeEvent } from "react";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge/Badge";

type TaskManagerItemProps = {
  name: string;
  status: "completed" | "pending";
  priotity: "low" | "medium" | "high";
  category: "work" | "personal" | "study" | "other";
};

const statusStyle = {
  completed: "bg-badge-background-completed text-badge-text-completed",
  pending: "bg-badge-background-pending text-badge-text-pending",
};

export default function TaskManagerItem({
  name,
  status,
}: TaskManagerItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [statusTask, setStatusTask] = useState<"completed" | "pending">(status);

  function handleisChecked(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    setIsChecked(checked);
    setStatusTask(() => (checked ? "completed" : "pending"));
  }

  return (
    <article className="flex justify-between items-center gap-5">
      <header className="flex items-center gap-8 w-[60%]">
        <input
          className="accent-brand-purple w-10 h-5"
          type="checkbox"
          checked={isChecked}
          onChange={handleisChecked}
          name=""
          id=""
        />
        <p className="text-lg w-[90%]">{name}</p>
      </header>
      <section className="w-[35%] flex justify-evenly items-center">
        <Badge
          className={statusStyle[statusTask]}
          value={statusTask}
          type="status"
        />

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
