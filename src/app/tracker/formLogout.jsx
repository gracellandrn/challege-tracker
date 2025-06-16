import React from "react";
import logoutAction from "./actionLogout";
import { Button } from "@/components/ui/button";

export default function FormLogout() {
  return (
    <form action={logoutAction}>
      <Button type="submit" className="cursor-pointer">
        Logout
      </Button>
    </form>
  );
}
