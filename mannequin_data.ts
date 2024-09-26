import { InsertLike, InsertPost, InsertUser } from './schema'

export const users: InsertUser[] = [
  {
    id: '1',
    email: 'email@1.ru',
    password: 'admin1',
    firstName: 'Alex',
    lastName: 'Romanov',
    profilePicture: 'profile-01.png',
    username: 'martin',
  },
  {
    id: '2',
    email: 'email@2.ru',
    password: 'admin2',
    firstName: 'David',
    lastName: 'Philippoff',
    profilePicture: 'profile-02.jpg',
    username: 'volga',
  },
]

export const posts: InsertPost[] = [
  {
    id: '500',
    ownerId: '1',
    imageFile: 'post-500.jpg',
    textContent: 'This day I met the beautiful tree.',
  },
  {
    id: '501',
    ownerId: '1',
    imageFile: 'post-501.png',
    textContent: 'React is strong as hard.',
  },
  {
    id: '502',
    ownerId: '2',
    imageFile: 'post-502.png',
    textContent: 'Next.js is amazing',
  },
]

export const likes: InsertLike[] = [
  {
    id: '700',
    likerId: '1',
    receiverPostId: '502',
  },
  {
    id: '702',
    likerId: '2',
    receiverPostId: '502',
  },
  {
    id: '701',
    likerId: '2',
    receiverPostId: '501',
  },
]

// export const posts: InsertPost[] = [
//   {
//     id: '101',
//     title: 'Night walking',
//     content: 'Today We have walked in the forest at night',
//     userId: '1',
//   },
//   {
//     id: '102',
//     title: 'Swimming',
//     content: 'I like swimming',
//     userId: '1',
//   },

//   {
//     id: '103',
//     title: 'Cheese cake',
//     content: 'I cooked a wonderful cheese cake',
//     userId: '2',
//   },
//   {
//     id: '104',
//     title: 'One road',
//     content: 'One road is must be determined',
//     userId: '2',
//   },
// ]
