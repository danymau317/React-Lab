import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import { useState } from "react";
import NavbarMobile from "./layout/Navbar/HamburguerMenu/NavbarMobile";

type HomeProps = {};

export default function Home({}: HomeProps) {
  const [isOpenHamburguer, setIsOpenHamburguer] = useState<boolean>(false);
  return (
    <section>
      <header>
        <Navbar
          isOpenHamburguer={isOpenHamburguer}
          onToggle={setIsOpenHamburguer}
        />
      </header>

      <NavbarMobile
        isOpenHamburguer={isOpenHamburguer}
        onToggle={setIsOpenHamburguer}
      />
      <Outlet />
    </section>
  );
}
