import * as React from "react";

export function CardBalance({ balance, cardHolder, validThru }) {
  return (
    <div className="flex gap-5 justify-between self-center max-w-full w-[300px]">
      <div className="flex flex-col text-xs text-slate-400">
        <div className="self-start">Balance</div>
        <div className="self-start text-xl font-semibold text-slate-700">
          ${balance}
        </div>
        <div className="mt-7 max-md:mr-1.5">CARD HOLDER</div>
        <div className="text-base font-semibold text-slate-700">
          {cardHolder}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
          alt="Card issuer logo"
          className="object-contain self-end aspect-square w-[35px]"
        />
        <div className="mt-8 text-xs text-slate-400">VALID THRU</div>
        <div className="text-base font-semibold text-slate-700">
          {validThru}
        </div>
      </div>
    </div>
  );
}

export default CardBalance