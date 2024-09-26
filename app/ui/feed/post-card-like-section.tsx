import { FaRegComment } from 'react-icons/fa6'
import { AiOutlineLike } from 'react-icons/ai'
import { BsShare } from 'react-icons/bs'
import { getLikesToPost } from '@/app/lib/actions/likes'

export default async function PostCardLikeSection({
  postId,
}: {
  postId: string
}) {
  const likes = await getLikesToPost(postId)

  return (
    <div className="flex justify-between py-2 mb-2 px-3">
      <div className="flex gap-3">
        <div className="flex gap-1.5">
          <div>
            <AiOutlineLike className="text-2xl" />
          </div>
          <div className="text-wsecond dark:text-dsecond">{likes.length}</div>
        </div>
        <div className="flex gap-1.5">
          <div>
            <FaRegComment className="text-2xl" />
          </div>
          <div className="text-wsecond dark:text-dsecond">120</div>
        </div>
      </div>
      <div>
        <BsShare className="text-2xl" />
      </div>
    </div>
  )
}
