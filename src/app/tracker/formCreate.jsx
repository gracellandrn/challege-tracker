"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect, useState } from "react";
import { createTrackerAction } from "./actionCreate";

export const FormCreate = () => {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState(createTrackerAction, null);

  useEffect(() => {
    if (state?.status === "success") {
      setOpen(false);
    }
  }, [state]);

  return (
    <main>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="gap-2 cursor-pointer">
            <PlusCircle className="w-4 h-4" />
            Add Challenge
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={action}>
            <DialogHeader>
              <DialogTitle>Add Challenge</DialogTitle>
              <DialogDescription className="mb-6">
                Fill in the details below to start a new challenge.
              </DialogDescription>
            </DialogHeader>
            {state?.status === "error" && (
              <p className="text-red-600 mb-4">{state?.message}</p>
            )}
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Input id="description" name="description" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="duration">Duration (Days)</Label>
                <Input type="number" id="duration" name="duration" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer mt-4">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                disabled={pending}
                type="submit"
                className="cursor-pointer mt-4"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};
