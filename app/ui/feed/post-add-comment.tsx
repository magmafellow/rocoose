export default function PostAddComment({ data, n }: { data: any, n: number }) {
  return (
    <div className="flex gap-3 mb-2 px-2">
      <div className="w-6 h-6 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-center object-cover"
          src={data[n].avatar}
          alt="avatar"
        />
      </div>
      <div className="text-stone-400">Add comment...</div>
    </div>
  )
}
