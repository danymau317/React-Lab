import type { Dispatch, SetStateAction } from "react";
import NavbarItem from "./NavbarItem";
import react from "../../../assets/icons/react.svg";
import HamburguerMenu from "./HamburguerMenu/HamburguerMenu";
import { navSections } from "./config/navSections";

type NavbarProps = {
  isOpenHamburguer: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ isOpenHamburguer, onToggle }: NavbarProps) {
  return (
    <nav className="bg-white rounded-lg lg:m-auto lg:my-5 p-5">
      <section className="flex justify-between items-center gap-2 lg:justify-start">
        <div className="flex items-center gap-5">
          <img
            className="animate-[spin_2.5s_linear_infinite]"
            src={react}
            alt="react-icon"
          />
          <h1 className="font-bold text-xl text-center lg:mr-10">React Lab</h1>
        </div>
        <ul className="hidden lg:flex lg:justify-around lg:gap-10 lg:px-3">
          {navSections.map((section) => (
            <NavbarItem
              key={section.path}
              path={section.path}
              nameSection={section.nameSection}
            />
          ))}
        </ul>
        <HamburguerMenu
          isOpenHamburguer={isOpenHamburguer}
          onToggle={onToggle}
        />
      </section>
    </nav>
  );
}
