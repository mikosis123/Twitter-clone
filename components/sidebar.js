import Image from "next/image";
import image from "../public/images.png";
import isk from "../public/isk.jpg";
import Sidebarmenu from "./sidebarmenu";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="hidden sm:flex flex-col xl:items-start fixed h-full p-2">
      {/* twitter logo */}
      <div className="hoverEffect ">
        <Image height="50" width="50" src={image}></Image>
      </div>
      {/* side bar menu items */}
      <div className="mt-4 mb-2.4 xl:item-start">
        <Sidebarmenu text="Home" Icon={HomeIcon} active />
        <Sidebarmenu text="explore" Icon={HashtagIcon} onClick={signIn} />

        {session ? (
          <>
            <Sidebarmenu text="Notifications" Icon={BellIcon} />
            <Sidebarmenu text="Messages" Icon={InboxIcon} />
            <Sidebarmenu text="Bookmark" Icon={BookmarkIcon} />
            <Sidebarmenu text="Lists" Icon={ClipboardIcon} />
            <Sidebarmenu text="Profile" Icon={UserIcon} />
            <Sidebarmenu text="More" Icon={DotsCircleHorizontalIcon} />
            <div className="flex flex-col item-center justify-center">
              <button className="bg-blue-400 text-white rounded-full h-12 w-56 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                tweet
              </button>
              <button
                onClick={signOut}
                className="bg-blue-400 text-white rounded-full mt-4 h-12 w-56 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
              >
                sign out
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={signIn}
            className="bg-blue-400 text-white rounded-full h-12 w-56 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
          >
            Sign in
          </button>
        )}
      </div>
      {/* button */}

      <div className="hoverEffect flex item-center justify-center text-gray-700 xl:justify-start mt-auto">
        <Image
          onClick={signOut}
          className="rounded-full h-10 w-10 mr-2 mr-x-auto"
          height="100"
          width="100"
          src={session?.user.image}
          alt="profile"
        ></Image>
        <div className="hidden xl:inline">
          <h4 className="text-gray-600">{session?.user.name}</h4>
          <p className="text-gray-500">@{session?.user.username}</p>
        </div>
        <DotsHorizontalIcon className=" h-6 ml-5hidden xl:inline flex item-center justify-center" />
      </div>
    </div>
  );
}
