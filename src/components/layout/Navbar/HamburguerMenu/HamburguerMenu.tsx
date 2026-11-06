import type { Dispatch, SetStateAction } from "react";

type HamburguerMenuProps = {
  isOpenHamburguer: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export default function HamburguerMenu({
  isOpenHamburguer,
  onToggle,
  className,
}: HamburguerMenuProps) {
  const iconColor = isOpenHamburguer
    ? "text-text-purple-primary"
    : "text-text-primary";

  return (
    <section
      className={`cursor-pointer transition-all duration-500 lg:hidden ${className}`}
      onClick={() => onToggle((prev) => !prev)}
    >
      <header className="flex items-center">
        <span
          className={`material-symbols-outlined text-3xl! transition-colors duration-500 ${iconColor}`}
        >
          {isOpenHamburguer ? "menu_open" : "menu"}
        </span>
      </header>
    </section>
  );
}
