import random from "../../../utils/random";
import Input from "../../ui/Input";
type TaskBuilderProps = {};

const taskExamples = [
  "Learn React",
  "Install Linux on RaspberryPi",
  "Practice NestJS",
  "Try mobile development",
  "Learn Java",
  "Try Angular",
  "Try Vue",
  "Improve with TypeScript",
  "Improve with Vanilla JavaScript",
];

export default function TaskBuilder({}: TaskBuilderProps) {
  const randomExample = random(0, taskExamples.length);

  return (
    <section className="bg-white rounded-xl mb-5 p-5">
      <header className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-start ">
        <label htmlFor="task-name-input" className="font-bold mr-5">
          Task Name
        </label>
        <Input
          id="task-name-input"
          className="border-brand-border focus:outline-none placeholder:text-center lg:w-[15%] lg:placeholder:text-start"
          type="text"
          value=""
          onClick={() => {}}
          placeholder={taskExamples[randomExample]}
        />
      </header>
    </section>
  );
}
