import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}

const DottedSeparator = ({
  className,
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
  height = "2px",
  color = "#d4d4d8",
}: DottedSeparatorProps) => {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "",
        className,
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
      )}
    ></div>
  );
};
export default DottedSeparator;
