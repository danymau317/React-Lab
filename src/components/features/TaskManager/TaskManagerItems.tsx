import TaskManagerItem from "./TaskManagerItem";

type TaskManagerItemsProps = {};

export default function TaskManagerItems({}: TaskManagerItemsProps) {
  return (
    <article className="bg-white rounded-xl flex flex-col p-5">
      <TaskManagerItem taskName="Prueba" status="completed" />
    </article>
  );
}
