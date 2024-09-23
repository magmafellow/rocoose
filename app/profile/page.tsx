import Navigator from '../ui/navigator'
import Bio from '../ui/profile/bio'
import EditContainer from '../ui/profile/edit-container'
import LogoAndName from '../ui/profile/logo-and-name'
import Posts from '../ui/profile/posts'
import PublicationStreaming from '../ui/profile/publication-streaming'
import Statistics from '../ui/profile/statistics'

export default function Page() {
  return (
    <div>
      <div className='mx-auto sm:max-w-[640px]'>

        <div className="px-5 py-5">
          <EditContainer />
          <LogoAndName />
          <Bio />
          <Statistics />
        </div>
        <PublicationStreaming />
        <Posts />
      </div>

    <Navigator />
    </div>
  )
}
