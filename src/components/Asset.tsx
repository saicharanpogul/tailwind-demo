import React from "react";
import {
  AssetData,
  formatName,
  pickColor,
  preparePopularPairs,
} from "../assets";

type Props = {
  data: AssetData;
};

const Asset: React.FC<Props> = ({ data }) => {
  return (
    <div className="xs:w-280 sm:w-400">
      <div className="flex flex-col items-center">
        <div className={`icon-container ${data.ticker.toLowerCase()}`}>
          {<data.icon className="w-14 h-14 md:w-16 md:h-16" />}
        </div>
      </div>
      <div className="background mt-4">
        <h2
          className={`text-tertiary ${pickColor(
            data.ticker
          )} font-semibold font-tomorrow mt-14 cursor-pointer`}
          onClick={() =>
            window.open(
              `https://coinmarketcap.com/currencies/${formatName(
                data.name.toLowerCase()
              )}`
            )
          }
        >{`${data.name} (${data.ticker})`}</h2>
        <div>
          <div className="stat">
            <h3 className="text-secondary font-semibold font-tomorrow text-xl xs:text-lg">
              ${data.price.toLocaleString("en-US")}
            </h3>
            <h3
              className={`${
                data.trendType === "up" ? "text-up" : "text-down"
              } font-semibold font-tomorrow text-xl ml-8 xs:text-lg`}
            >
              {data.trendType === "up" ? "+" : "-"}
              {data.trend}
            </h3>
          </div>
          <h2 className="text-tertiary font-semibold font-tomorrow mt-2 text-center">
            Price
          </h2>
        </div>
        <div>
          <div className="stat">
            <h3 className="text-secondary font-semibold font-tomorrow text-xl xs:text-lg">
              ${data.tvl.toLocaleString("en-US")}
            </h3>
          </div>
          <h2 className="text-tertiary font-semibold font-tomorrow text-center mt-2">
            TVL
          </h2>
        </div>
        <div>
          <div className="flex w-40 justify-around bg-background mt-6 p-3 rounded-3xl">
            {preparePopularPairs(data.popularPairs).map((Pair, index) => (
              <Pair height={30} width={30} key={index} />
            ))}
          </div>
          <h2 className="text-tertiary font-semibold font-tomorrow text-center mt-2">
            Popular pairs
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Asset;
