import Chats from "../ui/messages/chats";
import Search from "../ui/messages/search";
import Topline from "../ui/messages/topline";
import Navigator from "../ui/navigator";

export default function Page() {
  return (
    <div className="min-h-screen text-wbase pb-24">
      <div>
        <div className="pt-5 px-4">
          <Topline />
          <Search />
          <Chats />

        </div>
      </div>

      <Navigator />
    </div>
  )
}
