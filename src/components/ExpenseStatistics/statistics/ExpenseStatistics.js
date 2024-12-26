import * as React from "react";

function ExpenseStatistics() {
  return (
    <div className="flex flex-col text-2xl font-semibold max-w-[350px] text-slate-700 mt-1">
      <div className="flex flex-col w-full">
        <div>Expense Statistics</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0befdc082238202b6178e2f000c89c44e2909d33aa05c212e861e589adb4c12?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
          alt="Expense statistics chart showing financial data"
          className="object-contain mt-5 w-full rounded-none aspect-[1.09]"
        />
      </div>
    </div>
  );
}

export default ExpenseStatistics;
