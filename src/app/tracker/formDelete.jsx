"use client";

import { Button } from "@/components/ui/button";
import { deleteTrackerAction } from "./actionDelete";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const FormDelete = ({ id }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="destructive">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[320px]">
        <DialogHeader>
          <DialogTitle>
            Do you really want to delete this challenge?
          </DialogTitle>
          <DialogDescription>
            All progress with this challenge will be lost
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="my-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <form action={deleteTrackerAction}>
            <input hidden name="id" value={id} readOnly />
            <Button className="cursor-pointer w-full" variant="destructive">
              Delete
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
