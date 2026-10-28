import { NavLink } from "react-router-dom";
type NavbarItemProps = {
  className?: string;
  path: string;
  nameSection: string;
};

export default function NavbarItem({
  className,
  path,
  nameSection,
}: NavbarItemProps) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `relative block w-40 text-center cursor-pointer p-1 rounded-lg
          transition-all duration-500 ease-in-out after:content-[''] after:absolute after:transition-all after:duration-500 after:w-full after:inset-0 hover:text-text-purple-primary hover:font-bold

          ${className}
          ${isActive ? "text-text-purple-primary font-bold after:content-[''] after:top-12 after:h-1 after:bg-interactive-hover after:opacity-100" : "after:top-15 after:opacity-0"}`
        }
      >
        {nameSection}
      </NavLink>
    </li>
  );
}
