import TaskManagerItem from "./TaskManagerItem/TaskManagerItem";

type TaskManagerItemsProps = {};

export default function TaskManagerItems({}: TaskManagerItemsProps) {
  return (
    <article className="bg-brand-background-alt rounded-xl flex flex-col p-5">
      <TaskManagerItem
        task={{
          id: 1,
          name: "prueba",
          category: "work",
          status: "pending",
          priority: "high",
          dueDate: new Date(2026, 11, 3),
        }}
      />
    </article>
  );
}
