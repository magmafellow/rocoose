import { SlMagnifier } from 'react-icons/sl'

export default function Search() {
  return (
    <div className="relative mb-5">
      <input
        className="bg-wbgbase focus:outline outline-gray-400 dark:outline-gray-700 dark:bg-dbgbase border border-gray-300 dark:border-gray-600 w-full block py-2.5 pl-9 pr-2 rounded placeholder:text-wsecond placeholder:dark:text-dsecond transition"
        type="text"
        placeholder="Search"
      />
      <SlMagnifier className="text-xl absolute left-2 top-3" />
    </div>
  )
}
