import { auth } from '@/auth'
import DefaultGrid from './ui/default-grid'
import Sidebar from './ui/sidebar'
import { getUserByEmail, getUserById } from './lib/actions/users'
import SidebarRight from './ui/sidebar-right'
import Link from 'next/link'
import Navigator from './ui/navigator'

export default async function NotFoundPage() {
  const session = await auth()
  const user = await getUserById(session?.user?.id!)

  return (
    <DefaultGrid>
      <Sidebar user={user} />
      <div className="h-screen flex text-wbase dark:text-dbase flex-col justify-center items-center gap-8">
        <h1 className="text-[72px] font-black">404</h1>
        <p className="text-2xl">You are getting lost. Try go / or /feed</p>
        <div className="flex gap-8">
          <Link
            className="py-4 px-4 bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 transition rounded-2xl font-medium"
            href="/"
          >
            home (/)
          </Link>
          <Link
            className="py-4 px-6 bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 transition rounded-2xl font-medium"
            href="/feed"
          >
            feed
          </Link>
        </div>
        <Navigator />
      </div>
      <SidebarRight />
    </DefaultGrid>
  )
}
