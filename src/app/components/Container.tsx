import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};
export default function Container({
  className = "",
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={`mx-auto max-w-full w-321.5 ${className}`}>{children}</div>
  );
}
