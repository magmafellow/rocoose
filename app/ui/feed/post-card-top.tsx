import { RxDotsHorizontal } from 'react-icons/rx'

export default function PostCardTop({ n, data }: { n: number; data: any }) {
  return (
    <div className="flex justify-between items-center mb-3 px-2">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={data[n].avatar}
            alt="avatar"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{data[n].name}</h3>
          <p className="text-wsecond">{data[n].at}</p>
        </div>
      </div>
      <div>
        <RxDotsHorizontal className="text-2xl" />
      </div>
    </div>
  )
}
