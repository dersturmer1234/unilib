import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HeaderProps {
  title: string;
  desc: string;
}

const Header = ({ title, desc }: HeaderProps) => {
  return (
    <CardHeader className={"text-center"}>
      <CardTitle className={"text-2xl font-medium"}>{title}</CardTitle>
      <CardDescription className="text-md">{desc}</CardDescription>
    </CardHeader>
  );
};
export default Header;
