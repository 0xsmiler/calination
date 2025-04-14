import React from "react";

export const TradingView = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.dextools.io/app/en/base/pair-explorer/0x086c01cd7891e8aed5fd27c01dcca6081b30318203aec3474c47464c030d9492?embed=1&theme=light"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="CNT Trading Chart"
      ></iframe>
    </div>
  );
};

export default TradingView;