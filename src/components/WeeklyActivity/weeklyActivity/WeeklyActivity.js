import * as React from "react";

function WeeklyActivity() {
  return (
    <div className="flex flex-col text-2xl font-semibold max-w-[730px] text-slate-700 ml-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="max-md:max-w-full">Weekly Activity</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5245bcfe8bb3daa052c99c5defb7275fc95bec814d1f849d7bb74d6ce5cc1fe?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
          alt="Weekly activity graph showing user engagement metrics"
          className="object-contain mt-5 w-full rounded-none aspect-[2.27] max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default WeeklyActivity;
