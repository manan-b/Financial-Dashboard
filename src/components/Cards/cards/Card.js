import * as React from "react";
import { CardBalance } from "./CardBalance";
import { CardNumber } from "./CardNumber";

export function Card({ balance, cardHolder, validThru, number }) {
  return (
    <div className="flex flex-col pt-5 mt-5 w-full bg-white rounded-3xl border border-solid shadow-2xl border-slate-200 w-61 h-60">
      <CardBalance 
        balance={balance}
        cardHolder={cardHolder}
        validThru={validThru}
      />
      <CardNumber number={number} />
    </div>
  );
}

export default Card
