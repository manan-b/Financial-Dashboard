import * as React from "react";

function RecentTransactions() {
  return (
    <div className="flex flex-col text-2xl font-semibold max-w-[350px] text-slate-700 mt-3">
      <div role="heading" aria-level="2">
        Recent Transaction
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ad8ea0d8d1fad257101d650f4b1a3d9b06c0cd216042d9817d67fbfffc016?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
        className="object-contain mt-5 w-full rounded-none aspect-[1.49]"
        alt="Recent transaction details"
      />
    </div>
  );
}

export default RecentTransactions;
