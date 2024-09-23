import { MdMailOutline } from "react-icons/md";
import { RiCopperCoinLine } from "react-icons/ri";
import AvatarMenu from "./topline-avatar-menu";
import ToplineMenu from "./topline-menu";

export default function ToplineBar({ user }: { user: any }) {
  return (
    <div className="flex justify-between mb-7">
      <AvatarMenu user={user} />
      <div>
        <h2 className="text-lg font-bold">Rocoose</h2>
      </div>
      <div className="flex gap-4">
        <RiCopperCoinLine className="text-2xl" />
        <MdMailOutline className="text-2xl" />
      </div>

      <ToplineMenu user={user} />
    </div>
  )
}
