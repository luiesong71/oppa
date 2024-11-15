import { useContext } from "react";
import { ThemeContext } from "./../../pages/_app";

export default function Paragraph3() {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  const sellNftDetails = [
    {
      iconUrl: "/assets/svg/coin",
      title: "OPPA GALLARY",
      description:
        "Create and deploy NFT to Blockchain network and connect it to your marketplace",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon3",
      title: "OPPA GALLARY",
      description:
        "Once you set up wallet of choice, connect it to OPPA by clicking the wallet icon in the top right corner. Learn about the wallets we support",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon1",
      title: "OPPA GALLARY",
      description:
        "Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon2",
      title: "OPPA GALLARY",
      description:
        "You can Buy and Sell any NFT items that is buy from other user with new price and share it with friends",
    },

    {
      iconUrl: "/assets/svg/sell-nft-icon4",
      title: "OPPA GALLARY",
      description:
        "Sell your items with price and also have ability to cancel anytime from sale and edit price can work at Token and bnb and polygon net, any network with solidity",
    },
    {
      iconUrl: "/assets/svg/sell-nft-icon2",
      title: "OPPA GALLARY",
      description:
        "You can resell any NFT items that is buy from other user with new price and share it with friends",
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
