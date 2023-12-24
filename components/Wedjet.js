import { SearchIcon } from "@heroicons/react/outline";
import { useState, setState } from "react";
import News from "./News";

export default function Wedjet({ newresult }) {
  const [Artnum, setArtnum] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5  ">
      <div className="w-[90%] xl:w-[75%] sticky bg-white py-1.5 z-50">
        <div className="flex relative p-3 item-center rounded-full bg-red-500 top-0">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            type="text"
            placeholder="search tweeter"
            className=" pl-11 border-gray-500 text-gray-700 shadow-lg focus:bg-white bg-gray-100 inset-0 rounded-full absolute"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">what's happening</h4>
        {newresult.slice(0, Artnum).map((article) => (
          <News title={article.title} article={article} />
        ))}
        <button
          onClick={() => setArtnum(Artnum + 5)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          show more
        </button>
      </div>
      <div>
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400">
          Show more
        </button>
      </div>
    </div>
  );
}
