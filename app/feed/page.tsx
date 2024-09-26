import Navigator from '../ui/navigator'
import ToplineBar from '../ui/feed/topline-bar'
import StoryBox from '../ui/feed/story-box'
import PostBox from '../ui/feed/post-box'
import { auth } from '@/auth'
import { getUserById } from '../lib/actions/users'
import DefaultGrid from '../ui/default-grid'
import Sidebar from '../ui/sidebar'
import SidebarRight from '../ui/sidebar-right'
import { getRandomLastPostsWithOwners } from '../lib/actions/posts'

export const metadata = {
  title: 'Feed | Rocoose'
}

export default async function Page() {
  const session = await auth()
  const user = await getUserById(session!.user!.id!)
  
  return (
    <DefaultGrid>
      <Sidebar user={user} />

      <div className="text-wbase dark:text-dbase pb-24 mx-auto sm:max-w-[640px]">
        <div className="px-5 pt-5">
          <ToplineBar user={user} />
          <StoryBox />
        </div>
        <PostBox />

        <Navigator />
      </div>
      <SidebarRight />
    </DefaultGrid>
  )
}
