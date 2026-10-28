import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Counter from "./components/features/Counter/Counter";
import Filter from "./components/features/Filter/Filter";
import ShoppingCart from "./components/features/ShoppingCart/ShoppingCart";
import TaskManager from "./components/features/TaskManager/TaskManager";
import Dashboard from "./components/features/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="counter" element={<Counter />} />
            <Route path="filter" element={<Filter />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
            <Route path="task-manager" element={<TaskManager />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
