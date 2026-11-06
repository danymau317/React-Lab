import { useState } from "react";
import Button from "../../ui/Button";
import TaskManagerItems from "./TaskManagerItems";
import TaskBuilder from "./TaskBuilder";

type TaskManagerProps = {};

export default function TaskManager({}: TaskManagerProps) {
  const [isVisibleBuilder, setIsVisibleBuilder] = useState<boolean>(false);

  return (
    <section className="h-[60vh] px-2 py-5 bg-brand-background lg:px-10">
      <header className="flex flex-col mb-10 lg:flex-row lg:justify-between ">
        <h2 className="text-2xl font-bold text-center mb-5 lg:text-start">
          Tasks
        </h2>
        <div className="relative flex flex-col justify-center items-center gap-5 overflow-hidden lg:flex-row">
          <Button
            value="Add Task"
            icon="list_alt_add"
            className="bg-brand-background-alt border-brand-border text-text-purple-primary"
            onClick={() => setIsVisibleBuilder(() => !isVisibleBuilder)}
          />
          <Button
            value="Save Tasks"
            icon="bookmark"
            className="bg-button text-text-secondary"
            onClick={() => {}}
          />
          <Button
            value="Cancel"
            icon="cancel"
            className={`bg-button-delete text-text-secondary duration-50 ${isVisibleBuilder ? "opacity-100 static" : "absolute opacity-0 top-full   pointer-events-none"}`}
            onClick={() => setIsVisibleBuilder(false)}
          />
        </div>
      </header>
      {isVisibleBuilder && <TaskBuilder />}
      <TaskManagerItems />
    </section>
  );
}
