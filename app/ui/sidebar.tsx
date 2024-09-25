import { RiHomeLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { FaRegBookmark } from 'react-icons/fa'
import { AiOutlineShopping } from 'react-icons/ai'
import { TfiCup } from 'react-icons/tfi'
import { FaRegCreditCard } from 'react-icons/fa6'
import { RiCopperCoinLine } from 'react-icons/ri'
import { BiMessageSquare } from 'react-icons/bi'
import Link from 'next/link'
import Signout from './signout'
import ThemeSwitcher from './theme-switcher'

export default function Sidebar({ user }: { user: any }) {
  return (
    <div className="h-screen hidden xl:flex flex-col pt-24 pl-6">
      <div className="flex gap-5 mb-10">
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <img src={`/${user.profilePicture}`} alt="avatar" />
        </div>
        <div>
          <h3 className="font-bold text-2xl">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-wsecond">@{user.username}</p>
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-8">
        <Link href="/" className="inline-flex group gap-4 items-center">
          <div>
            <RiHomeLine className="text-3xl text-wsecond dark:text-dsecond group-hover:text-blue-400 transition" />
          </div>
          <div className="font-semibold text-xl">Home</div>
        </Link>
        <Link
          href={`/profile/${user.id}`}
          className="inline-flex group gap-4 items-center"
        >
          <div>
            <CgProfile className="text-3xl text-wsecond dark:text-dsecond group-hover:text-blue-400 transition" />
          </div>
          <div className="font-semibold text-xl">My Perfil</div>
        </Link>
        <Link href="/messages" className="flex group gap-4 items-center">
          <div>
            <BiMessageSquare className="text-3xl text-wsecond dark:text-dsecond group-hover:text-blue-400 transition" />
          </div>
          <div className="font-semibold text-xl">Messages</div>
        </Link>
        <div className="flex gap-4 group items-center">
          <div>
            <FaRegBookmark className="text-3xl text-wsecond dark:text-dsecond group-hover:text-blue-400 transition" />
          </div>
          <div className="font-semibold text-xl">Guardado</div>
        </div>
        <div className="flex gap-4 group items-center">
          <div>
            <TfiCup className="text-3xl text-wsecond dark:text-dsecond group-hover:text-blue-400 transition" />
          </div>
          <div className="font-semibold text-xl">Ventas</div>
        </div>
        <div className="flex gap-4 group items-center">
          <div>
            <FaRegCreditCard className="text-3xl text-wsecond dark:text-dsecond group-hover:text-blue-400 transition" />
          </div>
          <div className="font-semibold text-xl">Agregar tarjeta</div>
        </div>
        <div className="flex gap-4 group items-center">
          <div>
            <RiCopperCoinLine className="text-3xl text-wsecond dark:text-dsecond group-hover:text-blue-400 transition" />
          </div>
          <div className="font-semibold text-xl">Monedas</div>
        </div>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
