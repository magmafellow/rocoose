import { BsFillSendFill } from "react-icons/bs";


export default function SendLineForm() {
  return (
    <form action="" className="flex items-center gap-3">
      <input
        type="text"
        className="flex-grow py-2.5 outline outline-1 outline-gray-300 border-gray-300 focus:outline-2 focus:outline-sky-200 focus:border-none px-2 rounded-md bg-[#F7F7FC]"
      />
      <button className="shrink-0">
        <BsFillSendFill className="text-2xl" />
      </button>
    </form>
  )
}
