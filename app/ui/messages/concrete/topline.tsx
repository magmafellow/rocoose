import { RxDotsHorizontal } from 'react-icons/rx'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Topline() {
  return (
    <div className="flex justify-between px-2 py-1.5 pb-2 transition">
      <div className="flex justify-center items-center mr-3">
        <div className="rounded-full hover:bg-gray-200 hover:dark:bg-gray-700 p-1.5">
          <MdKeyboardArrowLeft className="text-3xl" />
        </div>
      </div>
      <div className="mr-3">
        <div className="w-12 h-12 overflow-hidden rounded-full">
          <img
            className="w-full h-full object-center object-cover"
            src="/coyote.jpg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-bold">Alex Romanov</h4>
        <p className="text-wsecond dark:text-dsecond">@romanov</p>
      </div>
      <div className="flex items-center justify-center mr-2">
        <div className="rounded-full hover:bg-gray-200 hover:dark:bg-gray-700 p-1.5">
          <RxDotsHorizontal className="text-3xl" />
        </div>
      </div>
    </div>
  )
}
