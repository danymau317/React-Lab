import TaskManagerItem from "./TaskManagerItem";

type TaskManagerItemsProps = {};

export default function TaskManagerItems({}: TaskManagerItemsProps) {
  return (
    <article className="bg-brand-background-alt rounded-xl flex flex-col p-5">
      <TaskManagerItem name="Prueba" status="completed" />
    </article>
  );
}
