import * as React from "react";

export const DashboardCard = ({ title, imageSrc, imageWidth, imageAspect }) => {
  return (
    <div className="ml-5 mr-8 flex flex-col text-2xl font-semibold text-slate-700 max-md:mt-8 max-md:max-w-full -translate-y-16">
      <div className="max-md:max-w-full">{title}</div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className={`object-contain w-[500px] mt-5 max-w-full rounded-none aspect-[${imageAspect}] w-[${imageWidth}px]`}
      />
    </div>
  );
};
