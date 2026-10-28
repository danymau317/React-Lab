export type InputProps = {
  value: string;
  className?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | "text";
  isActive?: boolean;
  classNameIsActive?: string;
  placeholder?: string;
};

export default function Input({
  value,
  className,
  onClick,
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
      placeholder={placeholder}
    />
  );
}
