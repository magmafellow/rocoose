'use client'

import { logout } from '../lib/actions/authenticate'

export default function Signout() {
  return (
    <button
      className="bg-blue-700 text-white py-4 px-2 rounded-xl"
      onClick={async () => await logout()}
    >
      Signout
    </button>
  )
}
