'use server'

import { db } from '@/drizzle'
import { posts } from '@/mannequin_data'
import { postsTable, usersTable } from '@/schema'
import { desc, eq } from 'drizzle-orm'
import { unstable_noStore } from 'next/cache'

export async function getRandomLastPostsWithOwners(limit: number) {
  unstable_noStore()
  const res = await db
    .select()
    .from(postsTable)
    .orderBy(postsTable.createdAt)
    .limit(limit).innerJoin(usersTable, eq(postsTable.ownerId, usersTable.id))

  return res
}

export async function createPosts() {
  unstable_noStore()
  await Promise.all(posts.map((post) => db.insert(postsTable).values(post)))
  console.log('Posts have been created')
}

export async function deletePosts() {
  unstable_noStore()
  await db.delete(postsTable)
  console.log('Posts have been deleted')
}
