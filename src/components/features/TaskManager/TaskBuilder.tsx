import random from "../../../utils/random";
import Input from "../../ui/Input";
type TaskBuilderProps = {};

type TaskType = {
  name: string;
  priority: "Low" | "Medium" | "High";
  DueDate: Date;
  Category: "Work" | "Personal" | "Study";
};

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
      <header>
        <label htmlFor="" className="mr-5">
          Task Name
        </label>
        <Input
          className="border-brand-border w-[15%] focus:outline-none"
          type="text"
          value=""
          onClick={() => {}}
          placeholder={taskExamples[randomExample]}
        />
      </header>
    </section>
  );
}
