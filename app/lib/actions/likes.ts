'use server'

import { db } from '@/drizzle'
import { likes } from '@/mannequin_data'
import { likesTable, postsTable } from '@/schema'
import { eq } from 'drizzle-orm'
import { unstable_noStore } from 'next/cache'

export async function createLikes() {
  unstable_noStore()
  await Promise.all(likes.map((like) => db.insert(likesTable).values(like)))
  console.log('Likes have been created')
}

export async function deleteLikes() {
  unstable_noStore()
  await db.delete(likesTable)

  console.log('Likes have been deleted')
}

export async function getLikesToPost(postId: string) {
  const res = await db
    .select()
    .from(likesTable)
    .where(eq(likesTable.receiverPostId, postId))
  return res
}
