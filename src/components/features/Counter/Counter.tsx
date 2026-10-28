import { useState } from "react";
import type { InputProps } from "../../ui/Input";
import Input from "../../ui/Input";

type CounterProps = {};

export default function Counter({}: CounterProps) {
  const [counter, setCounter] = useState<number>(0);
  const [isActiveLimit, setIsActiveLimit] = useState<boolean>(false);

  function addCounter() {
    setCounter((c) => c + 1);
  }

  function subsCounter() {
    setCounter((c) => (isActiveLimit ? Math.max(0, c - 1) : c - 1));
  }

  function enableLimit() {
    setIsActiveLimit(!isActiveLimit);
  }

  const buttonsCounter: InputProps[] = [
    {
      value: "Incrementar",
      className: "bg-[#5B3FD1] text-white",
      onClick: addCounter,
    },
    {
      value: "Decrementar",
      className: "text-[#5B3FD1]",
      onClick: subsCounter,
    },
    {
      value: "Limite",
      className: "text-[#5B3FD1]",
      onClick: enableLimit,
      isActive: isActiveLimit,
      classNameIsActive: "bg-[#5B3FD1] text-white",
    },
  ];

  return (
    <section className="border-2 bg-[#f5f1e7] h-[60vh] flex justify-center items-center">
      <section className="bg-white rounded-md w-[50vw] flex flex-col justify-center items-center py-10">
        <h2 className="text-xl">Count</h2>
        <p className="text-3xl font-bold">{counter}</p>
        <div className="mt-5 space-x-10">
          {buttonsCounter.map((button) => (
            <Input key={button.value} {...button} />
          ))}
        </div>
      </section>
    </section>
  );
}
