'use client'

import { truncatePhrase } from '@/app/lib/utils'
import { useState } from 'react'

export default function PostCardOpinion({
  username,
  firstName,
  lastName,
  textContent,
}: {
  username: string
  firstName: string
  lastName: string
  textContent: string
}) {
  const [isMore, setIsMore] = useState(false)

  return (
    <div className="mb-3 px-2">
      <p>
        <span className="font-bold text-lg mr-1">{firstName}</span>
        <span className="mr-1">
          {isMore ? textContent : truncatePhrase(textContent, 70)}
        </span>
        {textContent.length > 70 ? (
          !isMore ? (
            <button
              className="font-semibold tracking-wider hover:underline"
              onClick={() => setIsMore(true)}
            >
              more
            </button>
          ) : (
            <button
              className="font-semibold tracking-wider hover:underline"
              onClick={() => setIsMore(false)}
            >
              show less
            </button>
          )
        ) : (
          ''
        )}
      </p>
    </div>
  )
}
