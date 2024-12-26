import * as React from "react";
import { DashboardCard } from "./DashboardCard";

const dashboardData = [
  {
    title: "Quick Transfer",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7cc73b531ede08898e4a63cee5f5a5ed41252bfee91646dcfaa46f0e2851bec8?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
    imageWidth: 445,
    imageAspect: 1.61,
    width: "41%",
  },
  {
    title: "Balance History",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/becd90aa96cc33c2b35c8845991f1fb5bc18a116f55a427bc73df8a4e23ef766?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
    imageWidth: 635,
    imageAspect: 2.3,
    width: "59%",
  },
];

export function DashboardOverview() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col -mt-4">
        {dashboardData.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col w-[${item.width}] ${
              index > 0 ? "ml-5" : ""
            } max-md:ml-0 max-md:w-full`}
          >
            <DashboardCard
              title={item.title}
              imageSrc={item.imageSrc}
              imageWidth={item.imageWidth}
              imageAspect={item.imageAspect}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
