import Image from 'next/image'
import image from "../public/images.png"
import isk from "../public/isk.jpg"
import Sidebarmenu from './sidebarmenu'
import {HomeIcon} from '@heroicons/react/solid'
import {BellIcon, BookmarkAltIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col xl:items-start fixed h-full p-2'>
        {/* twitter logo */}
      <div className="hoverEffect ">
        <Image height ="50" width ="50" src = {image}></Image>
      </div>
       {/* side bar menu items */}
       <div className='mt-4 mb-2.4 xl:item-start'>
       <Sidebarmenu text="Home" Icon={HomeIcon} active />
       <Sidebarmenu text="explore" Icon={HashtagIcon} />
       <Sidebarmenu text="Notifications" Icon={BellIcon} />
       <Sidebarmenu text="Messages" Icon={InboxIcon} />
       <Sidebarmenu text="Bookmark" Icon={BookmarkIcon} />
       <Sidebarmenu text="Lists" Icon={ClipboardIcon} />
       <Sidebarmenu text="Profile" Icon={UserIcon} />
       <Sidebarmenu text="More" Icon={DotsCircleHorizontalIcon} />
       
      </div>
      {/* button */}
      <div>
        <button className='bg-blue-400 text-white rounded-full h-12 w-56 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>tweet</button>
      </div>
      <div className='hoverEffect flex item-center justify-center text-gray-700 xl:justify-start mt-auto'>
        <Image className='rounded-full h-10 w-10 mr-2 mr-x-auto' height ="100" width ="100" src = {isk}></Image>
        <div className='hidden xl:inline'>
          <h4 className='text-gray-600'>mikiyas sisay</h4>
          <p className='text-gray-500'>@ miko</p>
        </div>
        <DotsHorizontalIcon className=' h-6 ml-5hidden xl:inline flex item-center justify-center' />
      </div>
    </div>
  )
}
