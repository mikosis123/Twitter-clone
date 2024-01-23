import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div className="flex cursor-pointer border-b border-gray-200">
      {/* image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.data().userImage}
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
              {post.timestamp}
            </span>
          </div>
          {/* logo */}
          <DotsHorizontalIcon className="h-10 p-2 w-10 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16] p-2">
          {post.text}
        </p>
        {/* post image */}
        <img className="rounded-2xl  " src={post.data().img} />

        {/* user responses */}
        <div className="flex items-center justify-between">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-blue-100 text-gray-700" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100 text-gray-700" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100 text-gray-700" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-blue-100 text-gray-700" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover-blue:bg-100 text-gray-700" />
        </div>
      </div>
    </div>
  );
}
