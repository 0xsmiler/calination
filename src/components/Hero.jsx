import React from "react";
import token from "../assets/token.png";
import BuyCNTBtn from "./BuyCNTBtn";

function Hero() {
  return (
    <section className="bg-gray-50 py-16 md:py-auto md:px-auto">
      <div className="container flex flex-col mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-5/12 text-left">
            <h1 className="text-[46px] md:text-[70px] font-bold text-[#133E76] md:leading-[82px] leading-[54px] mb-6">
              OWN THE
              <br />
              FUTURE
              <br />
              OF CALIFORNIA
            </h1>
            <p className="text-[28px] md:text-[40px] font-black italic text-[#E2A216] mb-8 leading-none">
              The People's Token. The
              <br />
              Movement's Currency.
            </p>
            {/* Mobile paragraph */}
            <p className="md:hidden text-[#000F2D] max-w-lg text-[18px] leading-[24px]">
              CaliNation Token (CNT) powers the Calexit movement, supports real
              causes, and unlocks a decentralised future — backed by
              mineral-rich mines and built for freedom.
            </p>
            {/* Desktop paragraph */}
            <p className="hidden md:block text-[#000F2D] mb-10 max-w-lg text-[20px] leading-[28px]">
              CaliNation Token (CNT) fuels the Calexit revolution — empowering
              real change through resource-backed value, decentralization, and
              economic freedom for all. Backed by mines, real estate, and
              innovation — CNT drives the Calexit cause with real value, real
              ownership, and real-world impact.
            </p>
          </div>
          <div className="flex py-12">
            <div className="flex w-full gap-10">
              <img
                src={token}
                alt="CaliNation Token"
                className="w-[337px] h-[396px] md:w-[437px] md:h-[474px] rounded-2xl"
              />
              {/* <img
                src="src/assets/art1.png"
                alt="Digital Art"
                className="hidden md:block w-full rounded-2xl"
              /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:justify-start">
          <a
            href="https://www.calexitnow.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#133E76] w-full justify-center md:w-auto text-white px-8 py-4 rounded-md font-medium hover:bg-blue-900 transition inline-flex items-center text-lg"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.17053 12.4491C6.28055 12.7763 6.10451 13.1307 5.77734 13.2408C4.71792 13.597 4.15489 14.4864 3.85373 15.3908C3.73414 15.7499 3.66189 16.0956 3.61848 16.3814C3.90434 16.338 4.25006 16.2658 4.60917 16.1462C5.51355 15.845 6.4029 15.282 6.75916 14.2226C6.86918 13.8954 7.2236 13.7194 7.55078 13.8294C7.87795 13.9394 8.05399 14.2938 7.94396 14.621C7.4096 16.21 6.08801 16.9712 5.00411 17.3322C4.45655 17.5145 3.94395 17.6045 3.5698 17.6494C3.38182 17.672 3.22641 17.6834 3.116 17.6892C3.06074 17.6921 3.01658 17.6936 2.98505 17.6944C2.96928 17.6948 2.95666 17.695 2.94737 17.6951L2.93596 17.6952L2.93217 17.6952L2.93077 17.6952L2.93019 17.6952C2.92993 17.6952 2.92969 17.6952 2.92969 17.0702C2.30469 17.0702 2.30469 17.07 2.30469 17.0697L2.30469 17.0692L2.30469 17.0678L2.30471 17.064L2.30481 17.0526C2.30493 17.0433 2.30514 17.0306 2.30553 17.0149C2.30631 16.9833 2.30782 16.9392 2.31072 16.8839C2.31653 16.7735 2.32797 16.6181 2.35052 16.4301C2.3954 16.056 2.48542 15.5434 2.66776 14.9958C3.0287 13.9119 3.78989 12.5903 5.37891 12.056C5.70608 11.9459 6.0605 12.122 6.17053 12.4491ZM2.92969 17.0702H2.30469C2.30469 17.4154 2.58451 17.6952 2.92969 17.6952V17.0702Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5462 3.45394C15.8208 3.34931 14.0351 3.3099 12.2076 5.13741L7.34482 10.0002L10 12.6553L14.8627 7.79259C16.6903 5.96508 16.6508 4.17939 16.5462 3.45394ZM16.7275 2.21715C15.7298 2.0727 13.5058 2.07145 11.3237 4.25353L6.019 9.55821C5.90179 9.67542 5.83594 9.83439 5.83594 10.0002C5.83594 10.1659 5.90179 10.3249 6.019 10.4421L9.55806 13.9812C9.80214 14.2252 10.1979 14.2252 10.4419 13.9812L15.7466 8.67647C17.9287 6.49439 17.9275 4.2704 17.783 3.2727C17.7465 3.00567 17.6235 2.75791 17.4329 2.56728C17.2422 2.37665 16.9945 2.2537 16.7275 2.21715Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.422 8.49243C14.7672 8.49243 15.047 8.77225 15.047 9.11743V14.1643L15.0469 14.1732C15.0423 14.5015 14.9086 14.8147 14.675 15.0452L12.1527 17.5753C11.9926 17.7352 11.7921 17.8486 11.5725 17.9035C11.353 17.9584 11.1227 17.9527 10.9061 17.8869C10.6896 17.8212 10.495 17.6978 10.343 17.5301C10.1912 17.3625 10.0877 17.1569 10.0435 16.9351C10.0434 16.935 10.0435 16.9353 10.0435 16.9351L9.38731 13.6622C9.31946 13.3237 9.53882 12.9944 9.87727 12.9265C10.2157 12.8587 10.5451 13.078 10.6129 13.4165L11.2694 16.6909L13.797 14.1554V9.11743C13.797 8.77225 14.0768 8.49243 14.422 8.49243Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.82722 4.95307L5.83612 4.953H10.883C11.2282 4.953 11.508 5.23282 11.508 5.578C11.508 5.92318 11.2282 6.203 10.883 6.203H5.84496L5.83991 6.20816L5.83988 6.20813L3.30957 8.73063L3.31054 8.73082L6.58398 9.38707C6.92242 9.45492 7.14178 9.78429 7.07393 10.1227C7.00608 10.4612 6.67671 10.6805 6.33827 10.6127L3.0658 9.95663C3.06562 9.95659 3.06543 9.95655 3.06524 9.95652C2.84349 9.91232 2.63788 9.8088 2.47031 9.65699C2.3026 9.50504 2.17928 9.31042 2.11351 9.09387C2.04775 8.87733 2.042 8.647 2.09689 8.42745C2.15178 8.2079 2.26525 8.00737 2.42518 7.84725L2.42612 7.84631L2.42612 7.84632L4.95522 5.32502C5.18573 5.09139 5.49894 4.95774 5.82722 4.95307Z"
                fill="white"
              />
            </svg>
            Join Movement
          </a>
          
          {/* Buy CNT Button */}
          <button
            onClick={() => window.open("https://app.uniswap.org/swap?chain=base&inputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&outputCurrency=0xEe6603c1F8A8616Ee1038067fb7d6049bC992592", "_blank", "noopener,noreferrer")}
            className="bg-[#C68F00] hover:bg-[#b07e00] text-white font-semibold text-lg px-[80px] py-[20px] rounded-md transition"
          >
            Buy CNT
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
