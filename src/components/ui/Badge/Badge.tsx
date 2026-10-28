import { capitalize } from "../../../utils/text";

export type BadgeProps = {
  value: string;
  type: "status" | "priority" | "category" | "other";
  icon?: string;
  className?: string;
  format?: boolean;
};

export default function Badge({
  value,
  type,
  icon,
  className = "",
  format = true,
}: BadgeProps) {
  const showIcon = type === "priority" || type === "category";

  return (
    <span
      className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-1 font-semibold select-none transition-all duration-500 ${className}`}
    >
      {showIcon && icon && (
        <span className="material-symbols-outlined text-sm">{icon}</span>
      )}
      <span>{format ? capitalize(value) : value}</span>
    </span>
  );
}
