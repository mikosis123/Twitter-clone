import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

export default function Post({post}) {
  return (
    <div className="flex">
      {/* image */}
      <img className="h-11 w-11 rounded-full" src={post.userimage} alt="user-img"/>
      {/* right container */}
      <div className="">
        {/* header */}
             <div>
              {/* left info */}
              <div>
                <h4>{post.name}</h4>
                <span>{post.username}</span>
                <span>{post.timestamp}</span>
              </div>
              {/* logo */}
              <DotsHorizontalIcon className="h-10"/>
             </div>

             {/* post text */}
             <p>{post.text}</p>
             {/* post image */}
             <img src={post.img} />

              {/* user responses */}
             <div>
              <ChatIcon className="h-10"/>
              <TrashIcon className="h-10"/>
              <HeartIcon className="h-10"/>
              <ShareIcon className="h-10"/>
              <ChartBarIcon className="h-10"/>
              
             </div>

      </div>
      
    </div>
  )
}
