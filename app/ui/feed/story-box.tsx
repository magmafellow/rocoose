import StoryCard from "./story-card";

export default function StoryBox() {
  return (
    <div className="overflow-hidden mb-8">
      <h3 className="font-semibold mb-2">Stories</h3>
      <div className="flex gap-2 overflow-x-auto">
        {[1, 2, 3, 4, 5].map((value, i) => <StoryCard key={i} />)}
        
      </div>
    </div>
  )
}
