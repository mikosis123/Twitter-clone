import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Posts from "./post";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );
  return (
    <div className="xl:ml-[370px] border-l boarder-gray-200 border-r min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex sticky py-2 px-3 bg-white top-0 z-50 border-b border-gray-200 justify-between">
        <h2 className="text-lg sm:text-xl cursor-pointer font-bold">Home</h2>
        <div className="hoverEffect ">
          <SparklesIcon className="h-5 " />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
}
