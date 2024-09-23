import Chat from "@/app/ui/messages/concrete/chat";
import SendLine from "@/app/ui/messages/concrete/send-line";
import Topline from "@/app/ui/messages/concrete/topline";

export default function Page() {
  return (
    <div className="min-h-dvh text-wbase">
      <div className='pt-4 min-h-screen flex flex-col mx-auto sm:max-w-[640px]'>
        <Topline />
        <Chat />
        <SendLine />
      </div>
    </div>
  )
}
