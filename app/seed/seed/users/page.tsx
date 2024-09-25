import { createUsers } from "@/app/lib/actions/users"

export default async function Page() {
  await createUsers()

  return (
    <div>seed users</div>
  )
}