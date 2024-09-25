export default function StoryCard() {
  return (
    <div className="h-40 w-24 border border-gray-400 dark:border-gray-500 bg-stone-500 dark:bg-stone-700 shrink-0 rounded-md relative">
      <div className="w-8 h-8 p-0.5 box-content border-2 border-orange-400 dark:border-orange-300 absolute top-1.5 left-1.5 rounded-full">
        <div className="w-8 h-8 bg-amber-300 dark:bg-amber-500 rounded-full"></div>
      </div>
    </div>
  )
}
