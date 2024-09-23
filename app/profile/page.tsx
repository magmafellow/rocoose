import { auth } from '@/auth'
import Navigator from '../ui/navigator'
import Bio from '../ui/profile/bio'
import EditContainer from '../ui/profile/edit-container'
import LogoAndName from '../ui/profile/logo-and-name'
import Posts from '../ui/profile/posts'
import PublicationStreaming from '../ui/profile/publication-streaming'
import Statistics from '../ui/profile/statistics'
import { getUserById } from '../lib/actions/users'
import DefaultGrid from '../ui/default-grid'
import Sidebar from '../ui/sidebar'
import SidebarRight from '../ui/sidebar-right'

export default async function Page() {
  const session = await auth()
  const user = await getUserById(session!.user!.id!)

  return (
    <DefaultGrid>
      <Sidebar user={user} />
      <div>
        <div className="mx-auto sm:max-w-[640px]">
          <div className="px-5 py-5">
            <EditContainer session={session} />
            <LogoAndName user={user} />
            <Bio />
            <Statistics />
          </div>
          <PublicationStreaming />
          <Posts />
        </div>

        <Navigator />
      </div>
      <SidebarRight />
    </DefaultGrid>
  )
}
