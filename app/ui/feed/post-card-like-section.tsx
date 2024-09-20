import { FaRegComment } from 'react-icons/fa6'
import { AiOutlineLike } from 'react-icons/ai'
import { BsShare } from 'react-icons/bs'

export default function PostCardLikeSection() {
  return (
    <div className="flex justify-between py-2 mb-2 px-3">
      <div className="flex gap-3">
        <div className="flex gap-1.5">
          <div>
            <AiOutlineLike className="text-2xl" />
          </div>
          <div className="text-wsecond">100</div>
        </div>
        <div className="flex gap-1.5">
          <div>
            <FaRegComment className="text-2xl" />
          </div>
          <div className="text-wsecond">120</div>
        </div>
      </div>
      <div>
        <BsShare className="text-2xl" />
      </div>
    </div>
  )
}
