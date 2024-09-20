'use client'

import { truncatePhrase } from '@/app/lib/utils'
import { useState } from 'react'

export default function PostCardOpinion() {
  const [isMore, setIsMore] = useState(false)

  return (
    <div className='mb-3 px-2'>
      <p>
        <span className="font-bold text-lg mr-1">Userna</span>
        <span className="mr-1">
          {isMore
            ? 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, repudiandae quo? Odio impedit earum eos eaque neque eligendi dolorem vero adipisci suscipit, ipsam dolore aut incidunt aliquid necessitatibus aliquam iure?'
            : truncatePhrase(
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, repudiandae quo? Odio impedit earum eos eaque neque eligendi dolorem vero adipisci suscipit, ipsam dolore aut incidunt aliquid necessitatibus aliquam iure?',
                70
              )}
        </span>
        {!isMore ? (
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
        )}
      </p>
    </div>
  )
}
