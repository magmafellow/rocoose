import Navigator from '../ui/navigator'
import ToplineBar from '../ui/feed/topline-bar'
import StoryBox from '../ui/feed/story-box'
import PostBox from '../ui/feed/post-box'


export default function Page() {
  return (
    <div className='text-wbase pb-24'>
      <div className="px-5 pt-5">
        <ToplineBar />
        <StoryBox />
      </div>
      <PostBox />

      <Navigator />
    </div>
  )
}
