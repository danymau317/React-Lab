import { NavLink } from "react-router-dom";
import type { NavbarItemProps } from "../NavbarItem";

type NavBarMobileItemProps = NavbarItemProps & {
  onNavigate: () => void;
};

export default function NavBarMobileItem({
  className,
  path,
  nameSection,
  onNavigate,
}: NavBarMobileItemProps) {
  return (
    <li>
      <NavLink
        to={path}
        onClick={onNavigate}
        className={({ isActive }) =>
          `w-screen block py-2 px-5 rounded-lg transition-[color] duration-300 ${isActive ? "bg-brand-purple-opacity-80 text-interactive-hover font-bold" : "text-text-primary font-normal"} ${className}`
        }
      >
        {nameSection}
      </NavLink>
    </li>
  );
}
