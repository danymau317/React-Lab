import NavbarItem from "./NavbarItem";
import react from "../../../assets/icons/react.svg";
type NavbarProps = {};

type NavSectionsType = {
  nameSection: string;
  path: string;
};

const navSections: NavSectionsType[] = [
  {
    nameSection: "Counter",
    path: "/counter",
  },
  {
    nameSection: "Filter",
    path: "/filter",
  },
  {
    nameSection: "Shopping Cart",
    path: "/shopping-cart",
  },
  {
    nameSection: "TaskManager",
    path: "/task-manager",
  },
  {
    nameSection: "Dashboard",
    path: "/dashboard",
  },
];

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="bg-white rounded-lg m-auto my-5 p-5">
      <section className="flex gap-2">
        <div className="flex items-center gap-5">
          <img
            className="animate-[spin_2.5s_linear_infinite]"
            src={react}
            alt="react-icon"
          />
          <h1 className="font-bold text-xl mr-10">React Lab</h1>
        </div>
        <ul className="flex justify-around gap-10 px-3">
          {navSections.map((section) => (
            <NavbarItem
              key={section.path}
              path={section.path}
              nameSection={section.nameSection}
            />
          ))}
        </ul>
      </section>
    </nav>
  );
}
