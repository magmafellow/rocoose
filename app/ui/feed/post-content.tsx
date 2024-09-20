export default function PostContent({ data, n }: { data: any, n: number }) {
  return (
    <div className="h-[400px]">
        <img
          className="w-full h-full object-cover"
          src={data[n].content}
          alt="forest"
        />
      </div>
  )
}