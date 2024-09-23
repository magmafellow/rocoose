import { deleteUsers } from "@/app/lib/actions/users"

// delete all tables content. IT DOES NOT DELETE TABLES
export default async function Page(){
  await deleteUsers()
  
  return (
    <div>
      seed/delete
    </div>
  )
}
