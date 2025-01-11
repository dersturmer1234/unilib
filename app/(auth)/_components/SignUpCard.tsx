"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import Header from "@/app/(auth)/_components/header";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { EyeClosed, EyeIcon } from "lucide-react";

const signUpSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    surname: z.string().trim().min(1, "Surname is required").trim(),
    nickname: z.string().trim().min(1, "Nickname is required").trim(),
    email: z
      .string()
      .trim()
      .email("You must use a valid email")
      .min(1, "Required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(256),
    repeatPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(256),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

const SignUpCard = () => {
  const [hidePass, setHidePass] = useState(true);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      surname: "",
      nickname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    toast(`Sign Up Submitted ${JSON.stringify(data)}`);
  };

  return (
    <Card className="w-full flex flex-col h-full px-7 md:w-[478px] border-none shadow-none">
      <Header title="Gira - Sign up" desc="Like Jira but Better" />
      <div className="">
        <Separator />
      </div>
      <CardContent className="pt-10 flex flex-col gap-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex gap-2 w-full flex-col">
              {/* Name */}
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Name" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="name"
              />

              {/* Surname */}
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Surname" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="surname"
              />

              {/* Nickname */}
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Nickname" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="nickname"
              />

              {/* Email */}
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Email" type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="email"
              />

              {/* Password */}
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input
                          {...field}
                          type={hidePass ? "password" : "text"}
                          placeholder="Password"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={(e) => {
                            e.preventDefault();
                            setHidePass(!hidePass);
                          }}
                        >
                          {hidePass ? (
                            <EyeClosed size={20} />
                          ) : (
                            <EyeIcon size={20} />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="password"
              />

              {/* Repeat Password */}
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Repeat Password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="repeatPassword"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
        <Separator />
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
