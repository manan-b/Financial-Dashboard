import * as React from "react";

export function FormField({ label, value, type = "text", className = "" }) {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label className="self-start text-base text-neutral-800">{label}</label>
      <div
        className={`px-5 py-4 mt-3 text-base bg-white rounded-2xl border border-solid border-slate-200 text-slate-400 ${className}`}
      >
        {value}
      </div>
    </div>
  );
}
