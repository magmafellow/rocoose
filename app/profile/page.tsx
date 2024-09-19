import Bio from '../ui/profile/bio'
import EditContainer from '../ui/profile/edit-container'
import LogoAndName from '../ui/profile/logo-and-name'
import Posts from '../ui/profile/posts'
import PublicationStreaming from '../ui/profile/publication-streaming'
import Statistics from '../ui/profile/statistics'

export default function Page() {
  return (
    <div>
      <div>

        <div className="px-5 py-5">
          <EditContainer />
          <LogoAndName />
          <Bio />
          <Statistics />
        </div>
        <PublicationStreaming />
        <Posts />
      </div>
    </div>
  )
}
