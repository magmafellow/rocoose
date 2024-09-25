import { MdKeyboardArrowLeft } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import Link from 'next/link'

export default function Topline() {
  return (
    <div className="flex justify-between items-center mb-3">
      <Link href='/'><MdKeyboardArrowLeft className="text-4xl cursor-pointer" /></Link>
      <h3 className="text-lg font-bold">Chats</h3>
      <AiFillEdit className="text-3xl" />
    </div>
  )
}
