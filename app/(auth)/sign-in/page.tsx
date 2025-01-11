import SignInCard from "@/app/(auth)/_components/signInCard";
import { getCurrent } from "@/app/(auth)/actions";
import { redirect } from "next/navigation";

const signInPage = async () => {
  const user = await getCurrent();
  if (user) {
    redirect("/");
  }
  return <SignInCard />;
};
export default signInPage;
