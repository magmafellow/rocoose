import { getUserById } from '@/app/lib/actions/users'
import DefaultGrid from '@/app/ui/default-grid'
import Chat from '@/app/ui/messages/concrete/chat'
import SendLine from '@/app/ui/messages/concrete/send-line'
import Topline from '@/app/ui/messages/concrete/topline'
import Sidebar from '@/app/ui/sidebar'
import { auth } from '@/auth'

export default async function Page() {
  const session = await auth()
  const user = await getUserById(session!.user!.id!)

  return (
    <DefaultGrid>
      <Sidebar user={user} />
      <div className="min-h-dvh text-wbase">
        <div className="pt-4 min-h-screen flex flex-col mx-auto sm:max-w-[640px]">
          <Topline />
          <Chat />
          <SendLine />
        </div>
      </div>
    </DefaultGrid>
  )
}
