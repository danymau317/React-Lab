import type { InputProps } from "./Input";

type ButtonProps = InputProps & {
  icon?: string;
};

export default function Button({
  value,
  icon,
  className,
  onClick,
  type = "button",
  isActive,
  classNameIsActive,
}: ButtonProps) {
  return (
    <button
      className={`border-2 p-2 rounded-xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-500 ${className} ${isActive ? classNameIsActive : ""}`}
      type={type}
      onClick={onClick}
    >
      {value}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  );
}
