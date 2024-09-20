import { SlMagnifier } from "react-icons/sl";

export default function Search() {
  return (
    <div className="relative mb-5">
      <input
        className="bg-[#F7F7FC] border border-gray-300 w-full block py-2.5 pl-9 pr-2 rounded placeholder:text-wsecond"
        type="text"
        placeholder="Search"
      />
      <SlMagnifier className="text-xl absolute left-2 top-3" />
    </div>
  )
}
