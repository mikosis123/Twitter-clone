import { SearchIcon } from "@heroicons/react/outline";


export default function Wedjet({newresult}) {
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5  ">
    <div className="w-[90%] xl:w-[75%] sticky bg-white py-1.5 z-50">
      <div className="flex relative p-3 item-center rounded-full bg-red-500 top-0" >
        <SearchIcon className="h-5 z-50 text-gray-500" />
        <input type="text" placeholder="search tweeter" className=" pl-11 border-gray-500 text-gray-700 shadow-lg focus:bg-white bg-gray-100 inset-0 rounded-full absolute"/>
      </div>
    </div>

    {newresult.map((articles)=>(
        
 <p>{articles.title}</p> 
    ))}
    
   
    </div>
  )
}


