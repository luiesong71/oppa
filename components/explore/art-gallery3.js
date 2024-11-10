import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function ArtGallery3(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {props.galleries.map((item, index) => (
        <div
          key={item.itemId}
          className="w-full h-auto grid grid-cols-1 bg-[#1E1E1E] border-2 border-[#1E1E1E] dark:bg-white dark:border-2 dark:border-gray-200 rounded-2xl text-white dark:text-gray-800 "
        >
          <div className="grid grid-cols-1 gap-2 p-4">
            <div className="bg-white rounded-xl">
              <Link
                href={{
                  pathname: `/market/${item.tokenId}/`,
                  query: {
                    id: `${item.itemId}`,
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.itemId}
                  className="w-full h-auto"
                ></img>
              </Link>
            </div>
            <div className="flex flex-row">
              <h1 className="flex-grow text-base">{item.name}</h1>
              <Link
                href={{
                  pathname: `/market/${item.tokenId}/`,
                  query: {
                    id: `${item.itemId}`,
                  },
                }}
              >
                <button className="rounded-full border-2 border-[#FFCC33] dark:border-0 dark:bg-[#FFCC33] w-[1.75rem] h-[1.75rem] text-white">
                  <FontAwesomeIcon icon={faAngleRight} className="" />
                </button>
              </Link>
            </div>
            <p className="text-[#A2A6D0] text-sm">{item.category}</p>
            <div className="flex flex-row py-4">
              <div className="rounded-full w-[1.5rem] text-center bg-[#FFCC33] text-white">
                <img
                  src="/assets/coin.png"
                  alt="coin icon"
                  className="max-w-full"
                />
              </div>
              <h1 className="flex-grow text-[#FFCC33] text-base ml-2">
                {item.price} ARC
              </h1>
            </div>
            <p className="text-sm truncate ...">{item.creator}</p>
            <p className="text-[#A2A6D0] text-xs">creator</p>
          </div>
        </div>
      ))}
    </div>
  );
}
