import React, { useState, useEffect } from "react";

export const TradingView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    // Set a timeout to check if loading takes too long
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log("DEXTools chart loading is taking longer than expected");
        // On mobile, after timeout, if still loading set iframe error 
        if (isMobile) {
          setIframeError(true);
        }
      }
    }, 5000);

    // Initial mobile check
    checkMobile();
    
    // Add resize listener to detect orientation changes
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isLoading, isMobile]);

  // Handle iframe load error
  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full h-[500px] overflow-hidden">
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <p>Loading DEXTools chart...</p>
        </div>
      )}
      
      {iframeError ? (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4">
          <p className="text-center mb-4">Unable to display chart on this device.</p>
          <a 
            href="https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?theme=light" 
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
            // Mobile-specific adjustments
            overflow: 'hidden',
            minHeight: isMobile ? '500px' : 'auto',
            maxWidth: '100vw',
            background: '#fff'
          }}
          onLoad={() => setIsLoading(false)}
          onError={handleIframeError}
          src={isMobile 
            ? "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?theme=light&chartType=1&drawingToolbars=false&defaultInterval=30m" 
            : "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
          }
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      )}
    </div>
  );
};

export default TradingView;
