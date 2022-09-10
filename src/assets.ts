import React from "react";
import { BTC, BUSD, ETH, SHIB, SOL } from "./assets/SVGs";

export const preparePopularPairs = (array: string[]): React.FC<SVGProps>[] => {
  let pair: React.FC[] = [];
  array.map((ele) => {
    if (ele === "SOL") {
      pair.push(SOL);
    }
    if (ele === "BTC") {
      pair.push(BTC);
    }
    if (ele === "ETH") {
      pair.push(ETH);
    }
    if (ele === "BUSD") {
      pair.push(BUSD);
    }
    if (ele === "SHIB") {
      pair.push(SHIB);
    }
    return pair;
  });
  return pair;
};

export const pickColor = (ticker: string) => {
  if (ticker === "SOL") {
    return "hover:text-sol";
  }
  if (ticker === "BTC") {
    return "hover:text-btc";
  }
  if (ticker === "ETH") {
    return "hover:text-eth";
  }
  if (ticker === "BUSD") {
    return "hover:text-busd";
  }
  if (ticker === "SHIB") {
    return "hover:text-shib";
  }
};

export const formatName = (name: string) => {
  return name.replace(" ", "-");
};

export type AssetData = {
  name: string;
  ticker: string;
  price: number;
  trendType: "up" | "down";
  trend: number;
  tvl: number;
  popularPairs: string[];
  icon: React.FC<SVGProps>;
};

const assets: AssetData[] = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    price: 21325.87,
    trendType: "up",
    trend: 10,
    tvl: 60000,
    popularPairs: ["SOL", "ETH", "BUSD"],
    icon: BTC,
  },
  {
    name: "Solana",
    ticker: "SOL",
    price: 34.61,
    trendType: "down",
    trend: 12.32,
    tvl: 60000,
    popularPairs: ["SOL", "ETH", "BUSD"],
    icon: SOL,
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    price: 1721.61,
    trendType: "down",
    trend: 11.93,
    tvl: 60000,
    popularPairs: ["SOL", "BTC", "BUSD"],
    icon: ETH,
  },
  {
    name: "Binance USD",
    ticker: "BUSD",
    price: 1.0,
    trendType: "up",
    trend: 0.26,
    tvl: 60000,
    popularPairs: ["SOL", "ETH", "BUSD"],
    icon: BUSD,
  },
  {
    name: "Shiba Inu",
    ticker: "SHIB",
    price: 0.00001296,
    trendType: "down",
    trend: 8.1,
    tvl: 60000,
    popularPairs: ["SOL", "ETH", "BUSD"],
    icon: SHIB,
  },
];

export default assets;
