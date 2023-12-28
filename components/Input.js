import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import picture from "../public/isk.jpg";
import { useSession, signOut } from "next-auth/react";
export default function Input() {
  const { data: session } = useSession;
  console.log(session);
  return (
    <div className="flex border-b border-gray-200 space-x-">
      <Image
        className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95"
        height={50}
        src={picture}
      ></Image>
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gay-700 tracking-wide min-h-[50px] text-gray-700"
            rows={2}
            placeholder="What's hapening"
          ></textarea>
        </div>
        <div className=" flex item-center justify-between p-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-medium hover:brightness-95 ">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
