"use client";
import { ReactNode } from "react";
import { CheckCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex max-w-3xl mx-auto h-14 w-full justify-between items-center">
        <div className="flex gap-1 items-center">
          <CheckCheckIcon size={32} />
          <h1 className="font-medium text-2xl">Gira</h1>
        </div>
        <Button asChild variant="outline">
          <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
            {isSignIn ? "Sign Up" : "Login"}
          </Link>
        </Button>
      </nav>
      <div className="flex justify-center pt-4 md:pt-14 items-center md:px-20 px-2">
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
