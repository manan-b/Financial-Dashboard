import React from "react";
import MyCards from "../components/Cards/cards/MyCards";
import RecentTransactions from "../components/RecentTransactions/transactions/RecentTransactions";
import WeeklyActivity from "./WeeklyActivity/weeklyActivity/WeeklyActivity";
import ExpenseStatistics from "./ExpenseStatistics/statistics/ExpenseStatistics";
import { DashboardOverview } from "./Statistics/dashboard/DashboardOverview";

const HomeContent = () => {
  return (
    <div className="relative flex flex-col gap-10 px-4">
      {/* Top Section: My Cards, Recent Transactions */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: My Cards, Weekly Activity */}
        <div className="flex flex-col gap-7 w-full lg:w-11/12">
          <MyCards />
          <WeeklyActivity />
        </div>
        {/* Right Column: Recent Transactions, Expense Statistics */}
        <div className="flex flex-col gap-10 w-full lg:w-5/12">
          <RecentTransactions />
          <ExpenseStatistics />
        </div>
      </div>

      {/* Dashboard Overview Section */}
      <div className="mt-20">
        <DashboardOverview />
      </div>
    </div>
  );
};

export default HomeContent;
