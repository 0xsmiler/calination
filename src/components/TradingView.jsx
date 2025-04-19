import React, { useState, useEffect } from "react";

export const TradingView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Check if device is mobile and specifically iOS
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      setIsMobile(isMobileDevice);
      
      // No longer immediately set error for iOS - we'll try to load the chart first
    };

    // Set a timeout to check if loading takes too long
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log("DEXTools chart loading is taking longer than expected");
        // On mobile, shorter timeout
        if (isMobile) {
          setIframeError(true);
          setIsLoading(false);
        }
      }
    }, isMobile ? 5000 : 8000); // Extended timeouts to give more time for loading

    // Initial device check
    checkDevice();
    
    // Add resize listener to detect orientation changes
    window.addEventListener('resize', checkDevice);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkDevice);
    };
  }, [isLoading, isMobile]);

  // Handle iframe load error
  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  // Get the correct chart URL based on device
  const getChartUrl = () => {
    // Use different chart configurations for mobile vs desktop
    if (isMobile) {
      // Use the simplest, most compatible chart configuration for mobile
      return "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?embed=1&simple=1&theme=light&chartType=1";
    }
    return "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?theme=light&chartType=2&chartResolution=30&drawingToolbars=false";
  };

  return (
    <div className="w-full h-[500px] overflow-hidden">
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <p className="text-center">Loading DEXTools chart...</p>
        </div>
      )}
      
      {iframeError ? (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4">
          <p className="text-center mb-4">
            Unable to load chart on this device.
          </p>
          <a 
            href="https://www.dextools.io/app/en/solana/pair-explorer/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#C68F00] text-white rounded hover:bg-[#C68F00]/80"
          >
            View Chart on DEXTools
          </a>
        </div>
      ) : (
        <iframe
          id="dextools-widget"
          title="DEXTools Trading Chart"
          width="100%"
          height="100%"
          style={{ 
            border: "none",
            display: isLoading ? 'none' : 'block',
            overflow: 'hidden',
            minHeight: '500px',
            maxWidth: '100vw',
            background: '#fff'
          }}
          onLoad={() => setIsLoading(false)}
          onError={handleIframeError}
          src={getChartUrl()}
          allow="fullscreen accelerometer autoplay picture-in-picture"
          referrerPolicy="no-referrer"
        ></iframe>
      )}
    </div>
  );
};

export default TradingView;
