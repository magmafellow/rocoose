import { auth } from '@/auth'
import Navigator from '@/app/ui/navigator'
import Bio from '@/app/ui/profile/bio'
import EditContainer from '@/app/ui/profile/edit-container'
import LogoAndName from '@/app/ui/profile/logo-and-name'
import Posts from '@/app/ui/profile/posts'
import PublicationStreaming from '@/app/ui/profile/publication-streaming'
import Statistics from '@/app/ui/profile/statistics'
import { getUserById } from '@/app/lib/actions/users'
import EditContainerWithout from '@/app/ui/profile/edit-containter-without'
import DefaultGrid from '@/app/ui/default-grid'
import Sidebar from '@/app/ui/sidebar'
import SidebarRight from '@/app/ui/sidebar-right'

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth()
  const user = await getUserById(session!.user!.id!)
  const userProfile = await getUserById(params.id)

  return (
    <DefaultGrid>
      <Sidebar user={user} />
      <div>
        <div className="mx-auto sm:max-w-[640px]">
          <div className="px-5 py-5">
            <EditContainerWithout session={session} />
            <LogoAndName user={userProfile} />
            <Bio />
            <Statistics />
          </div>
          <PublicationStreaming />
          <Posts />
        </div>

        <Navigator />
      </div>
      {/* <SidebarRight /> */}
    </DefaultGrid>
  )
}
