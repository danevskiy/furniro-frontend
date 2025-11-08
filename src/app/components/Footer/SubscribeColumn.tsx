"use client";
import { useState } from "react";
type SubscribeColumnProps = {
  title: string;
  className?: string;
};
export default function SubscribeColumn({
  title = "",
  className = "",
}: SubscribeColumnProps) {
  const [emailfield, setEmailField] = useState("");
  return (
    <div className={`${className} flex flex-col gap-13.5`}>
      <div className="text-neutral-400 font-medium">{title}</div>
      <div>
        <input
          className="w-50 border-b border-black text-black  placeholder:text-neutral-400 text-sm mr-2.75 outline-0"
          placeholder="Enter Your Email Address"
          name="email"
          type="email"
          value={emailfield}
          onChange={(e) => setEmailField(e.target.value)}
        />
        <button className="text-black text-sm font-medium border-b border-black uppercase">
          subscribe
        </button>
      </div>
    </div>
  );
}
