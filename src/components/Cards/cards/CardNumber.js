import * as React from "react";

export function CardNumber({ number }) {
  return (
    <div className="flex gap-5 justify-between px-8 py-5 mt-10 rounded-none border border-solid border-slate-200 max-md:px-5">
      <div className="my-auto text-2xl font-semibold text-slate-700">
        {number}
      </div>
      <div className="flex flex-col items-center px-1.5 rounded-full bg-slate-400 bg-opacity-50 h-[30px] w-[30px]">
        <div className="flex shrink-0 rounded-full bg-slate-400 bg-opacity-50 h-[30px] w-[30px] max-md:-mr-3.5" />
      </div>
    </div>
  );
}

export default CardNumber