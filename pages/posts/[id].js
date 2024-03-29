import Head from "next/head";
import Sidebar from "../../components/sidebar";
import Wedjet from "../../components/Wedjet";
import Post from "../../components/post";
import { ArrowLeftIcon } from "@heroicons/react/outline";

import Comment from "../../components/Comments";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect, Component } from "react";
import { db } from "../../firebase";
import CommentModal from "../../components/CommentModal";

export default function Home({ newresult, randomusers }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [post, setPost] = useState();
  const [comment, setComments] = useState([]);

  // get the post data

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comment"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);
  console.log(comment);

  useEffect(
    () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
    [db, id]
  );
  return (
    <>
      <Head>
        <title>twitter-clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* side bar */}

        <Sidebar />

        {/* feed  */}

        <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
          <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="hoverEffect" onClick={() => router.push("/")}>
              <ArrowLeftIcon className="h-5 " />
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
              Tweet
            </h2>
          </div>

          <Post id={id} post={post} />

          <div className="">
            {comment.map((comment) => (
              <Comment
                key={comment.id}
                commentId={comment.id}
                originalPostId={id}
                comment={comment.data()}
              />
            ))}
          </div>
        </div>
        {/* wedjets */}

        <Wedjet
          newresult={newresult.articles}
          randomusers={randomusers.results}
        />
        <CommentModal />
        {/* modal */}
      </main>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const newresult = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
  ).then((res) => res.json());

  const randomusers = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newresult,
      randomusers,
    },
  };
}
