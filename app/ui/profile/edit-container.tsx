import { MdKeyboardArrowLeft } from "react-icons/md";

import { BiLeftArrow } from "react-icons/bi"

export default function EditContainer() {
  return (
    <div className='flex justify-between items-center mb-2'>
        <MdKeyboardArrowLeft className='text-4xl' />
        <button className='px-4 py-2 border font-semibold border-gray-400 rounded'>
          Editar perfil
        </button>
      </div>
  )
}