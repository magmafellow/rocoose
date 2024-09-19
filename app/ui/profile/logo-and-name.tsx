export default function LogoAndName() {
  return (
    <div className="flex gap-5 items-center mb-4">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="/avatar.jpg"
          alt="avator of palomae"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg">Paloma Rincon</h3>
        <div className="text-wsecond">@princon</div>
      </div>
    </div>
  )
}
