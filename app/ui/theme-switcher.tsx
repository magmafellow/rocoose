'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { HiMoon } from 'react-icons/hi'
import { HiSun } from 'react-icons/hi2'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  })

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  if (!mounted) {
    return null
  }

  return theme === 'light' ? (
    <HiMoon
      className="cursor-pointer text-3xl"
      onClick={() => setTheme('dark')}
    />
  ) : (
    <HiSun
      className="cursor-pointer text-3xl"
      onClick={() => setTheme('light')}
    />
  )
}
