import { RiCopperCoinLine } from "react-icons/ri";
import ToplineMenuOpen from "./topline-menu-open";
import ToplineMenu from "./topline-menu";
import Notifications from "./notifications";
import NotificationsMenuOpen from "./notifications-menu-open";

export default function ToplineBar({ user }: { user: any }) {
  return (
    <div className="flex items-center justify-between mb-7">
      <ToplineMenuOpen user={user} />
      <div>
        <h2 className="text-lg font-bold">Rocoose</h2>
      </div>
      <div className="flex gap-4">
        {/* <RiCopperCoinLine className="text-2xl" /> */}
        <NotificationsMenuOpen />
      </div>

      <ToplineMenu user={user} />
      <Notifications user={user} />
    </div>
  )
}
