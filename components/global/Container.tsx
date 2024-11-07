import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "outline outline-2 outline-offset-2 mx-auto max-w-6xl xl:max-w-7xl px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
