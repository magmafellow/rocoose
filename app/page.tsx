'use client'

import { permanentRedirect, redirect, useRouter } from "next/navigation"
import { useEffect } from 'react'

export default function Page() {
  redirect('/feed')
  return (
    <div>redirected</div>
  )
}