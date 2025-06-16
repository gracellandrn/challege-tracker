"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateProgressAction } from "./action";
import { useActionState } from "react";
import Link from "next/link";

export const FormUpdateProgress = ({ id, duration }) => {
  const [state, action, pending] = useActionState(updateProgressAction, null);
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Update Progress</h2>
      {state?.status === "error" && (
        <p className="text-red-600">{state?.message}</p>
      )}
      <form action={action} className="space-y-4">
        <Input type="text" name="id" value={id} readOnly hidden />
        <Input
          max={duration}
          type="number"
          name="day"
          placeholder="Day (ex: 3)"
          className="border p-2 w-full"
        />
        <Textarea
          name="note"
          placeholder="Progress note..."
          className="border p-2 w-full"
        />
        <div className="flex justify-between">
          <Link href="/tracker">
            <Button className="cursor-pointer">Back</Button>
          </Link>
          <Button
            disabled={pending}
            type="submit"
            className="bg-black text-white px-4 py-2 cursor-pointer"
          >
            Save Progress
          </Button>
        </div>
      </form>
    </section>
  );
};
