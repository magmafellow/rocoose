'use client'

import { signupCredentials } from '@/app/lib/actions/authenticate'
import Link from 'next/link'
import { useFormState } from 'react-dom'

export default function SignupForm() {

  const [message, dispatch] = useFormState(signupCredentials, undefined)

  return (
    <form
      className="flex flex-grow pb-10 h-full flex-col gap-4 w-3/4 justify-center mx-auto"
      action={dispatch}
    >
      <div>
        <label className="text-sm text-stone-500" htmlFor="username">
          username
        </label>
        <input
          className="block bg-gray-100 dark:bg-dbgbase border border-gray-300 dark:border-stone-700 disabled:bg-gray-300 disabled:dark:bg-stone-950 disabled:dark:outline-1 disabled:dark:outline disabled:dark:outline-stone-700 w-full rounded-xl py-3 px-2 focus:outline-none focus:border-none"
          type="text"
          id="username"
          name="username"
        />
      </div>

      <div>
        <label className="text-sm text-stone-500" htmlFor="email">
          mail
        </label>
        <input
          className="block bg-gray-100 dark:bg-dbgbase border border-gray-300 dark:border-stone-700 w-full rounded-xl py-3 px-2 focus:outline focus:outline-gray-400 focus:dark:outline-stone-700"
          type="email"
          id="email"
          name="email"
        />
      </div>

      <div className="flex-grow">
        <label className="text-sm text-stone-500" htmlFor="password">
          password
        </label>
        <input
          className="block bg-gray-100 dark:bg-dbgbase border border-gray-300 dark:border-stone-700 w-full rounded-xl py-3 px-2 focus:outline focus:outline-gray-400 focus:dark:outline-stone-700"
          type="password"
          id="password"
          name="password"
        />
      </div>

      <div className="mb-3">
        {message?.error && (
          <p className="text-red-800 dark:text-red-500 text-center">
            {message.error}
          </p>
        )}
      </div>
      <div className="mb-3">
        {message?.success && (
          <p className="text-green-800 dark:text-green-500 text-center">
            {message.success}
          </p>
        )}
      </div>

      <div>
        <button className="block w-full bg-[#0c72e6] hover:bg-[#1f75b7] text-white rounded-2xl py-4">
          Sign up
        </button>
      </div>

      <div className="text-center">
        <p>
          Do already have an account?{' '}
          <span className="text-wblue hover:underline underline-offset-2">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </form>
  )
}
