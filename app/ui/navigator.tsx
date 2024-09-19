import { RiHomeLine } from 'react-icons/ri'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'
import { PiMonitorPlayFill } from 'react-icons/pi'
import { GoBell } from 'react-icons/go'

export default function Navigator() {
  return (
    <div className="fixed flex text-wsecond justify-center items-center gap-8 text-xl pb-3 pt-1 bottom-0 left-0 w-full h-16 rounded-t-2xl bg-[#1F1F2F]">
      <RiHomeLine className="cursor-pointer hover:text-wbgbase transition" />
      <IoSearchOutline className="cursor-pointer hover:text-wbgbase transition" />
      <div className="bg-orange-500 hover:scale-110 cursor-pointer py-2 px-4 rounded-2xl flex justify-center items-center transition">
        <FaPlus className="text-white text-xl" />
      </div>
      <PiMonitorPlayFill className="cursor-pointer hover:text-wbgbase transition" />
      <GoBell className="cursor-pointer hover:text-wbgbase transition" />
    </div>
  )
}
