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
      className: "bg-brand-purple text-white",
      onClick: addCounter,
    },
    {
      value: "Decrementar",
      className: "text-text-purple-primary",
      onClick: subsCounter,
    },
    {
      value: "Limite",
      className: "text-text-purple-primary",
      onClick: enableLimit,
      isActive: isActiveLimit,
      classNameIsActive: "bg-interactive-hover text-white",
    },
  ];

  return (
    <section className="bg-brand-background h-[50dvh] flex justify-center items-center py-5 px-2 lg:h-[60dvh]">
      <section className="bg-brand-background-alt rounded-md flex flex-col justify-center items-center w-screen gap-3 py-5 lg:py-10 lg:w-[50dvw]">
        <h2 className="text-xl">Count</h2>
        <p className="text-3xl font-bold">{counter}</p>
        <div className="flex flex-col self-center gap-2 lg:block lg:mt-5 lg:space-x-10">
          {buttonsCounter.map((button) => (
            <Input key={button.value} {...button} />
          ))}
        </div>
      </section>
    </section>
  );
}
