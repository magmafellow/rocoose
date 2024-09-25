'use client'

import { permanentRedirect } from "next/navigation"
import { useRouter } from "next/router"
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  useEffect(() => {
    router.push('/feed')
  })
  return (
    <div>redirected</div>
  )
}