import { MdMailOutline } from "react-icons/md";
import { RiCopperCoinLine } from "react-icons/ri";

export default function ToplineBar() {
  return (
    <div className="flex justify-between mb-7">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/avatar.jpg"
          alt="avatar"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">Rocoose</h2>
      </div>
      <div className="flex gap-4">
        <RiCopperCoinLine className="text-2xl" />
        <MdMailOutline className="text-2xl" />
      </div>
    </div>
  )
}
