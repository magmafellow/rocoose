import { MdMailOutline } from 'react-icons/md'
import NotificationsMenuClose from './notifications-menu-close'
import { IoIosHeart } from 'react-icons/io'
import { BiSolidComment } from 'react-icons/bi'

export default function Notifications({ user }: { user: any }) {
  return (
    <div className="topline-notifications-wrapper fixed z-10 -right-[105%] top-0 h-screen w-screen bg-wbgbase dark:bg-dbgbase">
      <div className="w-full h-screen">
        <h3 className="text-center font-bold text-lg pt-12 mb-6">
          Notifications
        </h3>
        <div>
          {/* notification card */}
          <div className="flex items-center border-b border-gray-300 dark:border-gray-600 hover:bg-slate-200 hover:dark:bg-slate-800 gap-4 px-2 lg:px-6 py-2">
            <div className="w-16 h-16 rounded-full relative">
              <img
                src={`/${user.profilePicture}`}
                className="rounded-full"
                alt="avatar picture"
              />
              <div className="absolute z-10 -bottom-0.5 -right-2 rounded-full w-9 h-9 flex justify-center items-center bg-gray-300">
                <IoIosHeart className="text-red-600 text-xl" />
              </div>
            </div>
            <div>
              <div>
                <span className="font-semibold">{user.firstName}</span> liked
                your profile picture!
              </div>
              {/* <div className="text-wsecond dark:text-dsecond">
                98 likes
              </div> */}

              <div className="text-wblue dark:text-dblue text-sm">
                10 mins ago
              </div>
            </div>
          </div>
          {/* notification card */}
          <div className="flex items-center border-b border-gray-300 dark:border-gray-600 hover:bg-slate-200 hover:dark:bg-slate-800 gap-4 px-2 lg:px-6 py-2">
            <div className="w-16 h-16 rounded-full relative">
              <img
                src={`/${user.profilePicture}`}
                className="rounded-full"
                alt="avatar picture"
              />
              <div className="absolute z-10 -bottom-0.5 -right-2 rounded-full w-9 h-9 flex justify-center items-center bg-gray-300">
                <BiSolidComment className="text-blue-600 text-xl" />
              </div>
            </div>
            <div>
              <div className="">
                <span className="font-semibold">{user.firstName}</span>{' '}
                commended your post!
              </div>
              <div className="text-wsecond dark:text-dsecond">
                Hey! I want it too
              </div>
              <div className="text-wblue dark:text-dblue text-sm">
                10 mins ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationsMenuClose />
    </div>
  )
}
