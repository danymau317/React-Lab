import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <p>Home</p>

      <Outlet />
    </section>
  );
}
