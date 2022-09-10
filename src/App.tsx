import React from "react";
import "./index.css";

import { Trending } from "./assets/SVGs";
import assetsData from "./assets";
import { Asset } from "./components";

function App() {
  return (
    <div className="bg-primary lg:p-10 xs:p-4">
      <div className="flex items-center">
        <Trending height={24} width={24} />
        <h1 className="text-xl font-tomorrow text-secondary font-semibold ml-4">
          Trending Assets
        </h1>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-3 xs:place-items-center">
        {assetsData.map((assetData, index) => (
          <Asset data={assetData} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
