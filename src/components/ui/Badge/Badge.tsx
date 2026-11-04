import { capitalize } from "../../../utils/text";
import type {
  TaskCategory,
  TaskStatus,
  TaskPriority,
} from "../../features/TaskManager/types/task.types";
import { badgeVariants } from "./Badge.variants";

export type BaseBadgeProps = {
  icon?: string;
  className?: string;
  format?: boolean;
};

type StatusBadgeProps = BaseBadgeProps & {
  type: "status";
  value: TaskStatus;
};

type PriorityBadgeProps = BaseBadgeProps & {
  type: "priority";
  value: TaskPriority;
};

type CategoryBadgeProps = BaseBadgeProps & {
  type: "category";
  value: TaskCategory;
};

export type VariantBadgeProps =
  | StatusBadgeProps
  | PriorityBadgeProps
  | CategoryBadgeProps;

export default function Badge({
  value,
  type,
  icon,
  className = "",
  format = true,
}: VariantBadgeProps) {
  const showIcon = type === "priority" || type === "category";
  const badgeVariant = (() => {
    switch (type) {
      case "status":
        return badgeVariants.status[value];

      case "priority":
        return badgeVariants.priority[value];

      case "category":
        return badgeVariants.category[value];
    }
  })();
  const badgeIcon = icon ?? badgeVariant.icon;

  return (
    <span
      className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-1 font-semibold select-none transition-all duration-500 ${className || badgeVariant.className}`}
    >
      {showIcon && (icon || badgeVariant?.icon) && (
        <span className="material-symbols-outlined text-sm">{badgeIcon}</span>
      )}
      <span>{format ? capitalize(value) : value}</span>
    </span>
  );
}
