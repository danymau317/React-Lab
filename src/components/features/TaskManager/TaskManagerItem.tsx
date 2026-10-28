import { useState, type ChangeEvent } from "react";
import { capitalize } from "../../../utils/text";
import Button from "../../ui/Button";

type TaskManagerItemProps = {
  taskName: string;
  status: "completed" | "pending";
};

const statusStyle = {
  completed: "bg-[#b6f4da] text-[#174036]",
  pending: "bg-[#fff3c9] text-[#bd921c]",
};

export default function TaskManagerItem({
  taskName,
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
          className="accent-[#5B3FD1] w-10 h-5"
          type="checkbox"
          checked={isChecked}
          onChange={handleisChecked}
          name=""
          id=""
        />
        <p className="text-lg w-[90%]">{taskName}</p>
      </header>
      <section className="w-[35%] flex justify-evenly items-center">
        {/* Crear componente de Badge */}
        <p
          className={`rounded-xl px-5 py-1 font-semibold select-none transition-colors duration-500 ${statusStyle[statusTask]}`}
        >
          {capitalize(statusTask)}
        </p>
        {/* Crear badge de prioridad */}
        {/* Crear badge de categoria */}
        {/* Poner variables para colores de paleta en el css */}
        <Button
          value="Edit"
          icon="edit"
          className="border-2 border-[#5B3FD1] text-[#5B3FD1] bg-[#5c3fd115]"
          onClick={() => {}}
        />
        <Button
          value="Delete"
          icon="delete"
          className="bg-[#ec5548] text-white"
          onClick={() => {}}
        />
      </section>
    </article>
  );
}
