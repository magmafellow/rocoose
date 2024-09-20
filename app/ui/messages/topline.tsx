import { MdKeyboardArrowLeft } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'

export default function Topline() {
  return (
    <div className="flex justify-between items-center mb-3">
      <MdKeyboardArrowLeft className="text-4xl cursor-pointer" />
      <h3 className="text-lg font-bold">Chats</h3>
      <AiFillEdit className="text-3xl" />
    </div>
  )
}
