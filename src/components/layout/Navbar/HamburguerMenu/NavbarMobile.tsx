import type { Dispatch, SetStateAction } from "react";
import { navSections } from "../config/navSections";
import NavBarMobileItem from "./NavBarMobileItem";

type NavbarMobileProps = {
  className?: string;
  isOpenHamburguer: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
};

export default function NavbarMobile({
  className = "",
  isOpenHamburguer,
  onToggle,
}: NavbarMobileProps) {
  return (
    <section
      className={`grid transition-[grid-template-rows] duration-500 ${isOpenHamburguer ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ${className}`}
    >
      <div className="overflow-hidden">
        <ul className="flex flex-col items-center gap-5 p-5">
          {navSections.map((nav) => (
            <NavBarMobileItem
              key={nav.path}
              {...nav}
              onNavigate={() => onToggle(false)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
