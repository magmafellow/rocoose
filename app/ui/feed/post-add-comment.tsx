export default function PostAddComment({ profilePicture }: { profilePicture: string }) {
  return (
    <div className="flex gap-3 mb-2 px-2">
      <div className="w-6 h-6 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-center object-cover"
          src={profilePicture}
          alt="avatar"
        />
      </div>
      <div className="text-stone-400 dark:text-stone-300">Add comment...</div>
    </div>
  )
}
