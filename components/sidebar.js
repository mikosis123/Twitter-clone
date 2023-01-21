import Image from 'next/image'
import image from "../public/images.png"
import isk from "../public/isk.jpg"
import Sidebarmenu from './sidebarmenu'
import {HomeIcon} from '@heroicons/react/solid'
import {BellIcon, BookmarkAltIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    <>
        {/* twitter logo */}
      <div className="">
        <Image height ="50" width ="50" src = {image}></Image>
      </div>
       {/* side bar menu items */}
       <div className=''>
       <Sidebarmenu text="Home" Icon={HomeIcon} />
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
        <button>tweet</button>
      </div>
      <div>
        <Image height ="100" width ="100" src = {isk}></Image>
        <div>
          <h4>mikiyas sisay</h4>
          <p>@ miko</p>
        </div>
        <DotsHorizontalIcon className='h-6' />
      </div>
    </>
  )
}
