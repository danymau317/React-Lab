import Badge from "../../../ui/Badge/Badge";
import { formatDate } from "../../../../utils/date";
import type {
  TaskCategory,
  TaskStatus,
  TaskPriority,
} from "../types/task.types";

type TaskManagerItemDetailsProps = {
  dueDate: Date | null;
  statusTask: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
};

export default function TaskManagerItemDetails({
  dueDate,
  statusTask,
  priority,
  category,
}: TaskManagerItemDetailsProps) {
  return (
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
  );
}
