'use client'

import clsx from 'clsx'
import { useState } from 'react'

export default function PublicationStreaming() {
  const [isPublication, setIsPublication] = useState(true)

  return (
    <div className="flex">
      <div
        className={clsx('py-3 pl-5 basis-1/2', {
          'border-wblue cursor-pointer text-wblue border-b-2 transition': isPublication,
          'border-gray-400 text-wsecond border-b': !isPublication,
        })}
        onClick={() => setIsPublication(true)}
      >
        Publicasiones
      </div>
      <div
        className={clsx('py-3 pl-5 basis-1/2 cursor-pointer', {
          'border-wblue cursor-pointer text-wblue border-b-2 transition': !isPublication,
          'border-gray-400 text-wsecond border-b': isPublication,
        })}
        onClick={() => setIsPublication(false)}
      >
        Streaming
      </div>
    </div>
  )
}
