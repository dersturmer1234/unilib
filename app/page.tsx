import { getCurrent } from "@/app/(auth)/actions";
import { redirect } from "next/navigation";
import UserButton from "@/components/userButton";

const home = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div>
      <UserButton />a
    </div>
  );
};

export default home;
