import { permanentRedirect } from "next/navigation"

export default function Page() {
  permanentRedirect('/feed')
  return (
    <div>redirected</div>
  )
}