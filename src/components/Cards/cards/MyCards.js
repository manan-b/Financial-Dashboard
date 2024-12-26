import * as React from "react";
import { Card } from "./Card";

export function MyCards() {
  return (
    <div className="rounded-none max-w-[730px] ml-5 mt-2">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-2xl font-semibold text-slate-700 max-md:mt-8">
            <div className="self-start">My Cards</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a19116347852451bd738e1c84e0b63cfd6c137b687f79a9d203d388fd534ee46?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
              alt="Card illustration"
              className="object-contain mt-5 w-full rounded-none aspect-[1.49]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-1.5 max-md:mt-9">
            <div className="self-end text-lg font-semibold text-right text-slate-700 max-md:mr-2">
              <button className="focus:outline-none focus:ring-2 focus:ring-slate-400 rounded">
                See All
              </button>
            </div>
            <Card
              balance={`5,756`}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              number="3778 **** **** 1234"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCards