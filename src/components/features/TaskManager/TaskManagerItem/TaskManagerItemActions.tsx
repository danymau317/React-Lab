import Button from "../../../ui/Button";
type TaskManagerItemActionsProps = {};

export default function TaskManagerItemActions({}: TaskManagerItemActionsProps) {
  return (
    <section className="w-full flex flex-col items-center gap-5 lg:w-[35%] lg:flex-row lg:justify-evenly">
      <div className="w-full flex justify-between sm:justify-center sm:gap-10 lg:justify-start lg:gap-5">
        <Button
          value="Edit"
          icon="edit"
          className="border-2 border-brand-border text-text-purple-primary bg-brand-purple-opacity-80"
          onClick={() => {}}
        />
        <Button
          value="Delete"
          icon="delete"
          className="bg-button-delete text-text-secondary"
          onClick={() => {}}
        />
      </div>
    </section>
  );
}
