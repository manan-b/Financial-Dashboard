import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationItem } from "./NavigationItem";

export const Sidebar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Enable mobile view
      } else {
        setIsMobile(false); // Disable mobile view
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = [
    {
      icon:
        location.pathname === "/"
          ? "https://cdn.builder.io/api/v1/image/assets/TEMP/31b8296595752c82ddea03c7607002f028158fa7ad2383dd1a645e80e6ea8b2b?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
          : "https://cdn.builder.io/api/v1/image/assets/TEMP/3fb42a52ca8c5ffdfb96d9107bd07dd685dafd46925516961311014dbe01a3c6?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Dashboard",
      isActive: location.pathname === "/",
      link: "/",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57d16e9047eddc5a4912684c4d3e571d94692acf8c48f6ef4d3674afb15bc2a9?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Transactions",
      isActive: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3dd64a9d7b4da125f92f7ca3647120118ec4ad25f0ba9c2c1b3db74ce6bf5f9?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Accounts",
      isActive: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/48b5c6b189fe2fed36cdc9b013618e04449900743ce2b48ab521e9c569110680?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Investments",
      isActive: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d880cd7b8f5b8fce9226a537815ef9d99db9ad6bce55c33ef9bf2c6d9b0695f2?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Credit Cards",
      isActive: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/107f284049ff781fcd2a85d6f32319d7d496c8853db46f53e6147370046ca8c7?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Loans",
      isActive: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86f4fae36a6015581a6ebe167c703bc44da4aa5b962f2e07ffa9d734163b97c4?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Services",
      isActive: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f7e7c5ae5db40d03ef99031c845a5cb966684a4d55670a9ec6ad990a57404d2?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "My Privileges",
      isActive: false,
    },
    {
      icon:
        location.pathname === "/settings"
          ? "https://cdn.builder.io/api/v1/image/assets/TEMP/42e6c0b4f62af4696f544a1972743efca6371457020e24b3577bd99820552ce9?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
          : "https://cdn.builder.io/api/v1/image/assets/TEMP/c60d132b36e42fc7fe287eb21c7349f3103621ea285567c635471359df1032db?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351",
      label: "Settings",
      isActive: location.pathname === "/settings",
      link: "/settings",
    },
  ];

  if (isMobile) {
    return null;
  }

  return (
    <div className="flex flex-col w-[10%] max-md:w-full transition-all duration-300">
      <div className="flex flex-col mt-3.5 w-full text-lg font-medium max-md:mt-10 cursor-pointer">
        {navigationItems.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-9" : ""}>
            <Link to={item.link}>
              <NavigationItem {...item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
