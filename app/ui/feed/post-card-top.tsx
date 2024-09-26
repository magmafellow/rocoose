import { RxDotsHorizontal } from 'react-icons/rx'

export default function PostCardTop({
  profilePicture,
  firstName,
  lastName,
  username,
}: {
  profilePicture: string,
  firstName: string,
  lastName: string,
  username: string,
}) {
  return (
    <div className="flex justify-between items-center mb-3 px-2">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={profilePicture}
            alt="avatar"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{`${firstName} ${lastName}`}</h3>
          <p className="text-wsecond dark:text-dsecond">{username}</p>
        </div>
      </div>
      <div>
        <RxDotsHorizontal className="text-2xl" />
      </div>
    </div>
  )
}
