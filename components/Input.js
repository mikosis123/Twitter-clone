import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import picture from "../public/isk.jpg";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Input() {
  const { data: session } = useSession();
  console.log(session);
  const [Input, setInput] = useState("");
  const sendPost = async () => {
    const addref = await addDoc(collection(db, "posts"), {
      id: session.user.uid,

      text: Input,
    });
    setInput("");
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 space-x-">
          <Image
            className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95"
            height={50}
            onClick={signOut}
            src={picture}
            width={50}
          ></Image>
          <div className="w-full divide-y divide-gray-200">
            <div>
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gay-700 tracking-wide min-h-[50px] text-gray-700"
                rows={2}
                value={Input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's hapening"
              ></textarea>
            </div>
            <div className=" flex item-center justify-between p-2.5">
              <div className="flex">
                <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
              </div>
              <button
                onClick={sendPost}
                disabled={!Input.trim()}
                className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-medium hover:brightness-95 "
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
