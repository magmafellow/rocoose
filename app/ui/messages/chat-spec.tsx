export default function ChatSpec({ data, n }: { data: any; n: number }) {
  return (
    <div className="flex justify-between border-b border-gray-300 dark:border-gray-600 px-1 py-1.5 pb-2 hover:bg-stone-100 hover:dark:bg-slate-800 cursor-pointer transition">
      <div className="mr-3">
        <div className="w-12 h-12 overflow-hidden rounded-full">
          <img
            className="w-full h-full object-center object-cover"
            src={data[n].avatar}
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-bold">{data[n].name}</h4>
        <p className="text-wsecond dark:text-dsecond">Poema ifi toliata godura</p>
      </div>
      <div className="pt-1 flex items-center flex-col gap-2">
        <div>12:20</div>

        {data[n].name === 'Alex Romanov' ? null : (
          <div className="bg-wblue dark:bg-dblue rounded-full text-white flex justify-center items-center w-5 h-5">
            1
          </div>
        )}
      </div>
    </div>
  )
}
