import DividendChart from "@/components/Charts/DividendChart";
import StockTest from "@/components/Charts/StockPriceChart";
import TrendingStock from "@/components/Slider/TrendingStock";
import StockCard from "@/components/StockCards/StockCard";
import WatchList from "@/components/Watchlist/WatchList";
import { companies } from "@/utils/data";

import dynamic from "next/dynamic";

const StockPriceChart = dynamic(
  () => import("@/components/Charts/StockPriceChart"),
  {
    ssr: false, // Enables suspense for loading fallback
  }
);

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {companies.map((company) => (
          <StockCard
            key={company.symbol}
            symbol={company.symbol}
            companyName={company.companyName}
            logoUrl={company.logoUrl}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-12">
        <div className="space-y-6 sm:col-span-2 xl:col-span-8">
          {/* <StockPriceChart /> */}
          <StockTest />
          <TrendingStock />
        </div>
        <div className="sm:col-span-2 xl:col-span-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:block xl:space-y-5">
            <div>
              <DividendChart />
            </div>
            <div>
              <WatchList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
