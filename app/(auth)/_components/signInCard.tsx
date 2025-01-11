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

const signInSchema = z.object({
  email: z.string().email("You must use email to login").min(1, "Required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 charecters long ")
    .max(256),
});

const SignInCard = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signInSchema>) => {
    toast("Submitted" + JSON.stringify(data));
  };

  return (
    <Card className="w-full flex flex-col h-full px-7 md:w-[478px] border-none shadow-none ">
      <Header title={"Gira - Login"} desc="" />
      <div className="">
        <Separator />
      </div>
      <CardContent className="pt-10 flex flex-col gap-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
            <div className="flex gap-2 w-full  flex-col ">
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        placeholder="Email"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="email"
              />
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="password"
              />
            </div>
            <Button type={"submit"} className="w-full">
              Sign In
            </Button>
          </form>
        </Form>
        <Separator />
        <div className="flex gap-1 flex-col w-full ">
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default SignInCard;
