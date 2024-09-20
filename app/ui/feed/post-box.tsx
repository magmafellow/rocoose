import PostCard from "./post-card";


export default function PostBox() {
  const data = {
    1: {
      content: '/cool-forest.jpg',
      avatar: '/avatar.jpg',
      name: 'Paloma Rincon',
      at: '@princon'
    },
    2: {
      content: '/field.jpg',
      avatar: '/lion.jpg',
      name: 'Andrew Strong',
      at: '@armson'
    },
    3: {
      content: '/ocean.jpg',
      avatar: '/coyote.jpg',
      name: 'Alex Romanov',
      at: '@romanov'
    }
  }
  
  return (
    <div>
      <PostCard data={data} n={1} />
      <PostCard data={data} n={2} />
      <PostCard data={data} n={3} />
    </div>
  )
}
