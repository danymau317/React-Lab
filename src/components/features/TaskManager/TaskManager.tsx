import { useState } from "react";
import Button from "../../ui/Button";
import TaskManagerItems from "./TaskManagerItems";
import TaskBuilder from "./TaskBuilder";

type TaskManagerProps = {};

export default function TaskManager({}: TaskManagerProps) {
  const [isVisibleBuilder, setIsVisibleBuilder] = useState<boolean>(false);

  return (
    <section className="h-[60vh] px-10 py-5 bg-[#f8f1e8]">
      <header className="flex justify-between mb-10">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <div className="relative flex items-center gap-5">
          <Button
            value="Cancel"
            icon="cancel"
            className={`relative bg-[#ec5548] text-white ${isVisibleBuilder ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
            onClick={() => setIsVisibleBuilder(false)}
          />

          <Button
            value="Add Task"
            icon="list_alt_add"
            className="bg-white border-[#5B3FD1] text-[#5B3FD1]"
            onClick={() => setIsVisibleBuilder(() => !isVisibleBuilder)}
          />
          <Button
            value="Save Tasks"
            icon="bookmark"
            className="bg-[#5B3FD1] text-white"
            onClick={() => {}}
          />
        </div>
      </header>
      {isVisibleBuilder && <TaskBuilder />}
      <TaskManagerItems />
    </section>
  );
}
