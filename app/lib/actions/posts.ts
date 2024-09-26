'use server'

import { db } from '@/drizzle'
import { posts } from '@/mannequin_data'
import { postsTable, usersTable } from '@/schema'
import { desc, eq } from 'drizzle-orm'

export async function getRandomLastPostsWithOwners(limit: number) {
  const res = await db
    .select()
    .from(postsTable)
    .orderBy(postsTable.createdAt)
    .limit(limit).fullJoin(usersTable, eq(postsTable.ownerId, usersTable.id))

  return res
}

export async function createPosts() {
  await Promise.all(posts.map((post) => db.insert(postsTable).values(post)))

  console.log('Posts have been created')
}
