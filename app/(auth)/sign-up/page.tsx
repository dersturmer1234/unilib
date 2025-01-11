import SignUpCard from "@/app/(auth)/_components/SignUpCard";
import { getCurrent } from "@/app/(auth)/actions";
import { redirect } from "next/navigation";

const signUpPage = async () => {
  const user = await getCurrent();
  if (user) {
    redirect("/");
  }
  return <SignUpCard />;
};
export default signUpPage;
