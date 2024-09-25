export default function LogoAndName({ user }: { user: any }) {
  console.log(user.profilePicture)
  return (
    <div className="flex gap-5 items-center mb-4">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={`/${user.profilePicture}`}
          alt="avator of palomae"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg">{user.firstName}</h3>
        <div className="text-wsecond dark:text-dsecond">@princon</div>
      </div>
    </div>
  )
}
