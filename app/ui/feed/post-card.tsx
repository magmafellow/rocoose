import { truncatePhrase } from '@/app/lib/utils'
import PostCardLikeSection from './post-card-like-section'
import PostCardTop from './post-card-top'
import PostCardOpinion from './post-card-opinion'
import PostContent from './post-content'
import PostAddComment from './post-add-comment'
import PostTime from './post-time'
import { SelectPost, SelectUser } from '@/schema'

export default function PostCard({
  postWithUser,
}: {
  postWithUser: {
    users_table: SelectUser | null
    posts_table: SelectPost | null
  }
}) {
  const cummulativeObj = {
    userId: postWithUser.users_table?.id!,
    profilePicture: postWithUser.users_table?.profilePicture!,
    firstName: postWithUser.users_table?.firstName!,
    lastName: postWithUser.users_table?.lastName!,
    username: postWithUser.users_table?.username!,
    imageFile: postWithUser.posts_table?.imageFile!,
    textContent: postWithUser.posts_table?.textContent!,
  }

  return (
    <div className="mb-8">
      <PostCardTop {...cummulativeObj} />
      <PostContent imageFile={cummulativeObj.imageFile} />
      <PostCardLikeSection />
      <PostCardOpinion {...cummulativeObj} />
      <PostAddComment profilePicture={cummulativeObj.profilePicture} />
      <PostTime />
    </div>
  )
}
