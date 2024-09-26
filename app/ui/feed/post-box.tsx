import { getRandomLastPostsWithOwners } from '@/app/lib/actions/posts'
import PostCard from './post-card'

export default async function PostBox() {
  const postsWithUsers = await getRandomLastPostsWithOwners(5)

  return (
    <div>
      {postsWithUsers.map((postWithUser, i) => <PostCard key={i} postWithUser={postWithUser} />)}
    </div>
  )
}

const data = {
  1: {
    content: '/cool-forest.jpg',
    avatar: '/avatar.jpg',
    name: 'Paloma Rincon',
    at: '@princon',
  },
  2: {
    content: '/field.jpg',
    avatar: '/lion.jpg',
    name: 'Andrew Strong',
    at: '@armson',
  },
  3: {
    content: '/ocean.jpg',
    avatar: '/coyote.jpg',
    name: 'Alex Romanov',
    at: '@romanov',
  },
}
