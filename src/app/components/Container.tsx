import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};
export default function Container({
  className = "",
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={`mx-auto max-w-full w-341.5 px-5 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
