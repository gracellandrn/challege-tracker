import { Button } from "@/components/ui/button";
import { deleteTrackerAction } from "./actionDelete";

export const FormDelete = ({ id }) => {
  return (
    <form action={deleteTrackerAction}>
      <input hidden name="id" value={id} readOnly />
      <Button className="cursor-pointer" variant="destructive">
        Delete
      </Button>
    </form>
  );
};
