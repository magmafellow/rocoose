export default function PostContent({ imageFile }: { imageFile: string }) {
  return (
    <div className="h-[400px]">
        <img
          className="w-full h-full object-cover"
          src={`/${imageFile}`}
          alt="post picture"
        />
      </div>
  )
}