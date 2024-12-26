import * as React from "react";

export function TabItem({ label, isActive }) {
  return (
    <div
      className={`self-stretch my-auto ${
        isActive ? "text-neutral-800" : "text-slate-400"
      }`}
    >
      {label}
    </div>
  );
}
