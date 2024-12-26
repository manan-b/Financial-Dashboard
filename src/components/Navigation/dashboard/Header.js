import React from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const pageTitle = location.pathname === "/settings" ? "Settings" : "Overview";

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between px-10 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 my-auto text-slate-700">
          <div className="flex gap-2.5 self-start text-2xl font-extrabold">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/926b72f3953fc305456c77479fbbd9fe16e7f5630232abc43a7fbf0a412ee5f4?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
              alt="Soar Task Logo"
              className="object-contain shrink-0 aspect-square w-[35px]"
            />
            <div className="basis-auto">Soar Task</div>
          </div>
          <div className="text-3xl font-semibold ml-5">{pageTitle}</div>
        </div>
        <div className="flex flex-wrap gap-8 items-center text-base text-slate-400">
          <div className="flex gap-4 self-stretch px-6 py-4 my-auto shadow-lg bg-slate-100 rounded-[40px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30daee91696e50582b29f674a06dfce59ba7eb1915768c099051de743a91a554?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
              alt="Search icon"
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <div className="basis-auto">Search for something</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1282d3e192feec94ae475ef73eb28b909a71ac3132d063d1c14a468cfb76ac82?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
            alt="Notification icon"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b212169921a6d4d1b84e58eacde65487c9a45d151a81e9bd37de90dd00de55b6?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
            alt="Messages icon"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
            alt="Profile icon"
            className="object-contain shrink-0 self-stretch aspect-square w-[60px]"
          />
        </div>
      </div>
      <div className="flex shrink-0 self-end max-w-full h-px bg-slate-200 w-[1190px]" />
    </>
  );
};
