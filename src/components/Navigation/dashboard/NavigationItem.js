import React from "react";

export const NavigationItem = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex gap-6 items-center whitespace-nowrap ${isActive ? "text-neutral-800" : "text-zinc-400 ml-9"
        }`}
    >
      {isActive && (
        <div className="flex shrink-0 self-stretch w-1.5 rounded-none bg-neutral-800 h-[60px]" />
      )}
      <img
        loading="lazy"
        src={icon}
        alt={`${label} icon`}
        className="object-contain shrink-0 aspect-square w-[25px]"
      />
      <div className="basis-auto">{label}</div>
    </div>
  );
};
