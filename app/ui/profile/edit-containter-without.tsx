import Link from 'next/link'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function EditContainerWithout({ session }: { session: any }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <Link href="/feed">
        <MdKeyboardArrowLeft className="text-4xl cursor-pointer" />
      </Link>
      <div></div>
    </div>
  )
}
