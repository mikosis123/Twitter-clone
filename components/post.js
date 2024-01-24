import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";
import { signIn, useSession } from "next-auth/react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

import { useState, useEffect } from "react";
import { ref, deleteObject } from "firebase/storage";

export default function Post({ post }) {
  const { data: session } = useSession();
  const [liked, setLiked] = useState([]);
  const [hasLiked, setHasLiked] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLiked(snapshot.docs),
      {}
    );
  }, [db]);
  useEffect(() => {
    setHasLiked(
      liked.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [liked]);
  function likepost() {
    if (session) {
      if (hasLiked) {
        deleteDoc(doc(db, "posts", post.id, "likes", session.user.uid), {});
      } else {
        setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
          username: session.user.username,
        });
      }
    } else {
      signIn();
    }
  }
  function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?"))
      deleteDoc(doc(db, "posts", post.id));
    deleteObject(ref(storage, `posts/${post.id}/image`));
  }
  return (
    <div className="flex cursor-pointer border-b border-gray-200">
      {/* image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post?.data()?.userImage}
        alt="user-img"
      />
      {/* right container */}
      <div className="">
        {/* header */}
        <div className="flex item-center justify-between">
          {/* left info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post?.data().name}
            </h4>
            <span className="text-sm sm:text[15px]">
              {post.data().username}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>
          {/* logo */}
          <DotsHorizontalIcon className="h-10 p-2 w-10 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16] p-2">
          {post.data().text}
        </p>
        {/* post image */}
        <img className="rounded-2xl  " src={post.data().image} />

        {/* user responses */}
        <div className="flex items-center justify-between">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-blue-100 text-gray-700" />
          {session?.user?.uid === post?.data().id && (
            <TrashIcon
              onClick={deletePost}
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100 text-gray-700"
            />
          )}
          {hasLiked ? (
            <HeartIconFilled
              onClick={likepost}
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 text-red-600 hover:bg-red-100 "
            />
          ) : (
            <HeartIcon
              onClick={likepost}
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100 text-gray-700"
            />
          )}
          {liked.length > 0 && (
            <span className={hasLiked ? "text-red-600" : "text-gray-700"}>
              {liked?.length}
            </span>
          )}
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-blue-100 text-gray-700" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover-blue:bg-100 text-gray-700" />
        </div>
      </div>
    </div>
  );
}
