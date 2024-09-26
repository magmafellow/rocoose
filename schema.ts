import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users_table', {
  id: text('id').primaryKey(),
  username: text('username').notNull(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  profilePicture: text('profile_picture'),
  password: text('password').notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: text('phone_number').unique(),
})

export const postsTable = pgTable('posts_table', {
  id: text('id').primaryKey(),
  imageFile: text('image_file'),
  textContent: text('text_content'),
  ownerId: text('owner_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const messagesTable = pgTable('messages_table', {
  id: text('id').primaryKey(),
  textContent: text('text_content').notNull(),
  ownerId: text('owner_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
  receiverId: text('receive_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const likesTable = pgTable('likes_table', {
  id: text('id').primaryKey(),
  likerId: text('liker_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
  receiverUserId: text('receiver_user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
  receiverPostId: text('receiver_post_id')
    .notNull()
    .references(() => postsTable.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const commentsTable = pgTable('comments_table', {
  id: text('id').primaryKey(),
  textContent: text('text_content').notNull(),
  ownerId: text('owner_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
  receiverId: text('receiver_id').references(() => usersTable.id, {
    onDelete: 'set null',
  }),
  postId: text('post_id')
    .notNull()
    .references(() => postsTable.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const notificationsTable = pgTable('notifications_table', {
  id: text('id').primaryKey(),
  ownerId: text('owner_id').notNull(),
  type: text('type').notNull(), // comment / like
  receiverId: text('receiver_id').notNull(),
  postId: text('post_id')
    .notNull()
    .references(() => postsTable.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// export const postsTable = pgTable('posts_table', {
//   id: text('id').primaryKey(),
//   title: text('title').notNull(),
//   content: text('content').notNull(),
//   userId: text('user_id')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'set null' }),
//   createdAt: timestamp('created_at').notNull().defaultNow(),
//   updatedAt: timestamp('updated_at')
//     .notNull()
//     .$onUpdate(() => new Date()),
// })

// export const messagesTable = pgTable('messages_table', {
//   id: text('id').primaryKey(),
//   content: text('content').notNull(),
//   createdAt: timestamp('created_at').notNull().defaultNow(),
//   toWhom: text('to_whom')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'set null' }),
//   byWho: text('by_who')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'set null' }),
// })

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect

export type InsertPost = typeof postsTable.$inferInsert
export type SelectPost = typeof postsTable.$inferSelect

export type InsertMessage = typeof messagesTable.$inferInsert
export type SelectMessage = typeof messagesTable.$inferSelect

export type InsertLike = typeof likesTable.$inferInsert
export type SelectLike = typeof likesTable.$inferSelect

export type InsertComment = typeof commentsTable.$inferInsert
export type SelectComment = typeof commentsTable.$inferSelect

export type InsertNotification = typeof notificationsTable.$inferInsert
export type SelectNotification = typeof notificationsTable.$inferSelect

// export type InsertPost = typeof postsTable.$inferInsert
// export type SelectPost = typeof postsTable.$inferSelect

// export type InsertMessage = typeof messagesTable.$inferInsert
// export type SelectMessage = typeof messagesTable.$inferSelect
