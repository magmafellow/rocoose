import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function EditContainer() {
  return (
    <div className="flex justify-between items-center mb-2">
      <MdKeyboardArrowLeft className="text-4xl cursor-pointer" />
      <button className="px-4 py-2 border font-semibold border-gray-400 hover:bg-slate-200 rounded transition">
        Editar perfil
      </button>
    </div>
  )
}
