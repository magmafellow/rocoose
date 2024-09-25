import { auth } from '@/auth'
import { getUserById } from '../lib/actions/users'
import DefaultGrid from '../ui/default-grid'
import Chats from '../ui/messages/chats'
import Search from '../ui/messages/search'
import Topline from '../ui/messages/topline'
import Navigator from '../ui/navigator'
import Sidebar from '../ui/sidebar'
import SidebarRight from '../ui/sidebar-right'

export default async function Page() {
  const session = await auth()
  const user = await getUserById(session!.user!.id!)

  return (
    <DefaultGrid>
      <Sidebar user={user} />
      <div className="min-h-screen text-wbase dark:text-dbase pb-24">
        <div className="sm:max-w-[640px] mx-auto">
          <div className="pt-5 px-4">
            <Topline />
            <Search />
            <Chats />
          </div>
        </div>

        <Navigator />
      </div>
      <SidebarRight />
    </DefaultGrid>
  )
}
