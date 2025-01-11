"use client";
import { useCurrent } from "@/app/(auth)/api/use-current";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/logoutButton";
import { Separator } from "@/components/ui/separator";

const UserButton = () => {
  const { data: user, isLoading } = useCurrent();

  if (isLoading) {
    return (
      <div className="flex gap-1 items-center">
        <Skeleton className="size-10 rounded-full" />
      </div>
    );
  }

  const avatarFallback = user?.name
    ? user?.name.charAt(0).toUpperCase()
    : (user?.email.charAt(0).toUpperCase() ?? "U");
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Avatar className="size-10 cursor-pointer hover:opacity-65 border shadow-sm">
          <AvatarFallback className="font-medium items-center justify-center flex bg-neutral-200">
            {avatarFallback}
          </AvatarFallback>
          <AvatarImage></AvatarImage>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 shadow-2xl flex flex-col gap-y-1.5 items-center justify-center py-4">
        <DropdownMenuItem className="flex py-1 flex-col items-center justify-center">
          <Avatar className="size-[52px] text-xl border  ">
            <AvatarFallback className="font-medium items-center justify-center flex bg-neutral-200">
              {avatarFallback}
            </AvatarFallback>
            <AvatarImage></AvatarImage>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[16px] font-semibold">{user?.name || "USER"}</p>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="flex py-1 items-center  w-full">
          <div className="flex items-center justify-end ">
            <LogoutButton />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserButton;
