import { useContext } from "react";
import { ThemeContext } from "./../../pages/_app";

export default function Paragraph3() {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  const sellNftDetails = [
    {
      iconUrl: "/assets/svg/coin",
      title: "CryptoArc",
      description:
        "CryptoArc",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon3",
      title: "CryptoArc",
      description:
        "CryptoArc",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon1",
      title: "CryptoArc",
      description:
        "CryptoArc",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon2",
      title: "CryptoArc",
      description:
        "CryptoArc",
    },

    {
      iconUrl: "/assets/svg/sell-nft-icon4",
      title: "CryptoArc",
      description:
        "CryptoArc",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon2",
      title: "CryptoArc",
      description:
        "CryptoArc",
    },
  ];

  return (
    <div className="w-full h-auto">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-10 mt-8 sm:mx-16 sm:mt-16 lg:mx-[9vw] lg:mt-[9vw]">
        {sellNftDetails.map((item, index) => (
          <div
            key={"sell-nft" + index.toString()}
            className="grid grid-cols-1 gap-4"
          >
            <img src={item.iconUrl + (themeMode ? ".svg" : "-dark.svg")}></img>
            <h1 className="text-white dark:text-gray-800 text-xl">
              {item.title}
            </h1>
            <p className="text-[#A2A6D0] dark:text-gray-800 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
