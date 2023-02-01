import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Posts from "./post";


export default function Feed() {
  const posts = [
    {
      id:1,
      name: "mikiyas sisay",
      username:"miko",
      userimage : "https://media.istockphoto.com/id/1423284665/photo/man-tourist-walking-on-the-ice-of-baikal-lake-winter-landscape-of-baikal-lake-russia.jpg?b=1&s=170667a&w=0&k=20&c=VsezULZvjg-xRsDPRdmJbNdDdEV8Y3B9c7HJ6pfkbpg=",
      img :"https://media.istockphoto.com/id/1427249962/photo/tropical-leaves-abstract-green-leaf-texture-in-garden-nature-background.jpg?b=1&s=170667a&w=0&k=20&c=40KcV7mbAQWihuO0At8GSOTIKp-TvIoHGIhurHBeUq0=",
      text:"waw the nature buty",
      timestamp:"2 munites ago"
    }, 
    {
      id:2,
      name: "mikiyas sisay",
      username:"miko",
      userimage : "https://media.istockphoto.com/id/1423284665/photo/man-tourist-walking-on-the-ice-of-baikal-lake-winter-landscape-of-baikal-lake-russia.jpg?b=1&s=170667a&w=0&k=20&c=VsezULZvjg-xRsDPRdmJbNdDdEV8Y3B9c7HJ6pfkbpg=",
      img :"https://media.istockphoto.com/id/1411846592/photo/mountains-in-low-dense-fog-at-morning-sunrise-beautiful-landscape-with-mountain-peaks-in-fog.jpg?b=1&s=170667a&w=0&k=20&c=DPlaHpdGDq5dfTjE6JNUGr3BTRBYTMpQI-ai12mU4Qg=",
      text:"clouds and nature buty",
      timestamp:"2 munites ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l boarder-gray-200 border-r min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
 <div className="flex sticky py-2 px-3 bg-white top-0 z-50 border-b border-gray-200 justify-between">
  <h2 className="text-lg sm:text-xl cursor-pointer font-bold">Home</h2>
  <div className="hoverEffect ">
    <SparklesIcon className="h-5 "/>
  </div>
 </div>
 <Input />
 {posts.map((post)=>(
 <Posts key={post.id} post={post} />
 ))}
    </div>
    
  )
}
