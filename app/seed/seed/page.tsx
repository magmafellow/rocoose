import { createLikes } from '@/app/lib/actions/likes'
import { createPosts } from '@/app/lib/actions/posts'
import { createUsers } from '@/app/lib/actions/users'

export default async function Page() {
  await createUsers()
  await createPosts()
  await createLikes()

  return <div>seed/seed</div>
}
