import { redirect } from "next/navigation"

export default function Page() {
  redirect('/feed')
  return (
    <div>redirected</div>
  )
}