import { RiHomeLine } from 'react-icons/ri'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'
import { PiMonitorPlayFill } from 'react-icons/pi'
import { GoBell } from 'react-icons/go'
import { CgProfile } from 'react-icons/cg'
import { FaRegBookmark } from 'react-icons/fa'
import { AiOutlineShopping } from 'react-icons/ai'
import { TfiCup } from 'react-icons/tfi'
import { FaRegCreditCard } from 'react-icons/fa6'
import { RiCopperCoinLine } from 'react-icons/ri'
import ToplineMenuClose from './topline-menu-close'

export default function ToplineMenu() {
  return (
    <div className="topline-menu-wrapper bg-black hidden bg-opacity-15 fixed w-screen h-screen top-0 left-0 z-10">
      <div className="topline-menu h-screen flex flex-col w-full fixed -left-[100%] top-0 bg-white pt-24 pl-6">
        <div className="flex gap-5 mb-10">
          <div className="w-16 h-16 overflow-hidden rounded-full">
            <img src="/coyote.jpg" alt="avatar" />
          </div>
          <div>
            <h3 className="font-bold text-2xl">Paloma Rincon</h3>
            <p className="text-wsecond">@princon</p>
          </div>
        </div>
        <ul className="flex-grow">
          <div className="flex gap-4 items-center mb-9">
            <div>
              <RiHomeLine className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Home</div>
          </div>
          <div className="flex gap-4 items-center mb-9">
            <div>
              <CgProfile className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">My Perfil</div>
          </div>
          <div className="flex gap-4 items-center mb-9">
            <div>
              <FaRegBookmark className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Guardado</div>
          </div>
          <div className="flex gap-4 items-center mb-9">
            <div>
              <AiOutlineShopping className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Compras</div>
          </div>
          <div className="flex gap-4 items-center mb-9">
            <div>
              <TfiCup className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Ventas</div>
          </div>
          <div className="flex gap-4 items-center mb-9">
            <div>
              <FaRegCreditCard className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Agregar tarjeta</div>
          </div>
          <div className="flex gap-4 items-center mb-9">
            <div>
              <RiCopperCoinLine className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Monedas</div>
          </div>
        </ul>
        <div className="pb-10">
          <div className="mb-8 text-lg font-medium">Configuracion</div>
          <div className="text-lg font-medium">Centro de ayuda</div>
        </div>

        <ToplineMenuClose />
      </div>
    </div>
  )
}
