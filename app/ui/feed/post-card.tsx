import { truncatePhrase } from '@/app/lib/utils'
import PostCardLikeSection from './post-card-like-section'
import PostCardTop from './post-card-top'
import PostCardOpinion from './post-card-opinion'
import PostContent from './post-content'
import PostAddComment from './post-add-comment'
import PostTime from './post-time'

export default function PostCard({ n, data }: { n: number; data: any }) {
  return (
    <div className="mb-8">
      <PostCardTop data={data} n={n} />
      <PostContent data={data} n={n} />
      <PostCardLikeSection />
      <PostCardOpinion />
      <PostAddComment data={data} n={n} />
      <PostTime />
    </div>
  )
}
