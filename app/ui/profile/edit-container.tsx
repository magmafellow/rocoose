import Link from 'next/link'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function EditContainer({ session }: { session: any }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <Link href="/feed">
        <MdKeyboardArrowLeft className="text-4xl cursor-pointer" />
      </Link>
      <button className="px-4 py-2 border font-semibold border-gray-400 hover:bg-slate-100 hover:dark:bg-stone-700 rounded transition">
        Editar perfil
      </button>
    </div>
  )
}
