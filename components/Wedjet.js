import { SearchIcon } from "@heroicons/react/outline";
import { useState, setState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import News from "./News";

export default function Wedjet({ newresult, randomusers }) {
  const [Artnum, setArtnum] = useState(3);
  const [Numrusers, setNumrusers] = useState(3);
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
        <AnimatePresence>
          {newresult.slice(0, Artnum).map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <News title={article.title} article={article} />
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          onClick={() => setArtnum(Artnum + 5)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          show more
        </button>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <AnimatePresence>
          {randomusers.slice(0, Numrusers).map((rusers) => {
            return (
              <motion.div
                key={rusers.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div key={rusers.login.username}>
                  <div
                    key={rusers.login.username}
                    className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
                  >
                    <img
                      className="rounded-full"
                      width="40"
                      src={rusers.picture.thumbnail}
                      alt=""
                    />
                    <div className="truncate ml-4 leading-5">
                      <h4 className="font-bold hover:underline text-[14px] truncate">
                        {rusers.login.username}
                      </h4>
                      <h5 className="text-[13px] text-gray-500 truncate">
                        {rusers.name.first + " " + rusers.name.last}
                      </h5>
                    </div>
                    <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                      Follow
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <button
          onClick={() => {
            setNumrusers(Numrusers + 5);
          }}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
    </div>
  );
}
