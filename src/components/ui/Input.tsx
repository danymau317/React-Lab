import type { ChangeEvent } from "react";

export type InputProps = {
  value: string;
  className?: string;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "button" | "submit" | "reset" | "text";
  isActive?: boolean;
  classNameIsActive?: string;
  placeholder?: string;
};

export default function Input({
  value,
  className = "",
  onClick,
  onChange,
  type = "button",
  isActive,
  classNameIsActive,
  placeholder,
}: InputProps) {
  return (
    <input
      className={`border-2 p-2 rounded-xl cursor-pointer transition-all duration-500 ${className} ${isActive ? classNameIsActive : ""}`}
      type={type}
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
