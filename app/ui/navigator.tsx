import { RiHomeLine } from 'react-icons/ri'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'
import { PiMonitorPlayFill } from 'react-icons/pi'
import { GoBell } from 'react-icons/go'
import { BiMessageSquare } from 'react-icons/bi'
import Link from 'next/link'
import NotificationsMenuOpen from './feed/notifications-menu-open'

export default function Navigator() {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 w-full xl:hidden ">
      <div className="flex text-wsecond border-t border-l border-r border-gray-300 dark:border-gray-600 justify-center items-center gap-10 text-2xl pb-3 pt-1 w-full max-w-[415px] h-16 rounded-t-2xl bg-slate-200 dark:bg-dbgbase">
        <Link href="/">
          <RiHomeLine className="cursor-pointer hover:text-dbgbase hover:dark:text-wbgbase transition" />
        </Link>
        <Link href="/search">
          <IoSearchOutline className="cursor-pointer hover:text-dbgbase hover:dark:text-wbgbase transition" />
        </Link>
        <Link href="/new">
          <div className="bg-blue-500 hover:scale-110 cursor-pointer py-2 px-4 rounded-2xl flex justify-center items-center transition">
            <FaPlus className="text-white text-xl" />
          </div>
        </Link>
        <Link href="/messages">
          <BiMessageSquare className="cursor-pointer hover:text-dbgbase hover:dark:text-wbgbase transition" />
        </Link>
        {/* <Link href='/notifications'> */}
          {/* <GoBell className="cursor-pointer hover:text-dbgbase hover:dark:text-wbgbase transition" /> */}
          <NotificationsMenuOpen />
        {/* </Link> */}
      </div>
    </div>
  )
}
