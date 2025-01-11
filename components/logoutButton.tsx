"use client";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/app/(auth)/api/use-logout";
import { LogOutIcon } from "lucide-react";

const LogoutButton = () => {
  const { mutate, isPending } = useLogout();
  const handleLogout = () => {
    mutate();
  };
  return (
    <Button disabled={isPending} variant="ghost" onClick={() => handleLogout()}>
      <LogOutIcon className="text-amber-700" size="10" />
      <h1 className="text-amber-700">Logout</h1>
    </Button>
  );
};
export default LogoutButton;
