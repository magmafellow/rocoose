import ChatSpec from "./chat-spec";

export default function Chats() {
  const data = {
    1: {
      avatar: '/avatar.jpg',
      name: 'Paloma Rincon',
      at: '@princon'
    },
    2: {
      avatar: '/lion.jpg',
      name: 'Andrew Strong',
      at: '@armson'
    },
    3: {
      avatar: '/coyote.jpg',
      name: 'Alex Romanov',
      at: '@romanov'
    }
  }

  return (
  
    <div className="">
      {/* chat spec */}
      <ChatSpec data={data} n={1} />
      <ChatSpec data={data} n={2} />
      <ChatSpec data={data} n={3} />
    </div>
  )
}
