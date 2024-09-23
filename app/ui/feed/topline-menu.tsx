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
import Signout from '../signout'
import Link from 'next/link'

export default function ToplineMenu({ user }: { user: any }) {
  console.log(user)
  return (
    <div className="topline-menu-wrapper fixed w-screen h-screen top-0 -left-[100%] z-10">
      <div className="topline-menu h-screen flex flex-col w-full fixed -left-[100%] top-0 bg-white pt-24 pl-6">
        <div className="flex gap-5 mb-10">
          <div className="w-16 h-16 overflow-hidden rounded-full">
            <img src={`/${user.profilePicture}`} alt="avatar" />
          </div>
          <div>
            <h3 className="font-bold text-2xl">{user.firstName} {user.lastName}</h3>
            <p className="text-wsecond">@{user.username}</p>
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-8">
          <Link href='/' className="inline-flex group gap-4 items-center">
            <div>
              <RiHomeLine className="text-3xl text-wsecond group-hover:text-blue-400" />
            </div>
            <div className="font-semibold text-xl">Home</div>
          </Link>
          <Link href={`/profile/${user.id}`} className="inline-flex group gap-4 items-center">
            <div>
              <CgProfile className="text-3xl text-wsecond group-hover:text-blue-400 transition" />
            </div>
            <div className="font-semibold text-xl">My Perfil</div>
          </Link>
          <div className="flex gap-4 items-center">
            <div>
              <FaRegBookmark className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Guardado</div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <AiOutlineShopping className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Compras</div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <TfiCup className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Ventas</div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <FaRegCreditCard className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Agregar tarjeta</div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <RiCopperCoinLine className="text-3xl text-wsecond" />
            </div>
            <div className="font-semibold text-xl">Monedas</div>
          </div>
        </div>
        {user && (
          <div className="absolute right-4 bottom-8">
            <Signout />
          </div>
        )}

        <div className="pb-10">
          <div className="mb-8 text-lg font-medium">Configuracion</div>
          <div className="text-lg font-medium">Centro de ayuda</div>
        </div>

        <ToplineMenuClose />
      </div>
    </div>
  )
}
