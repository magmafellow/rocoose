'use client'

import gsap from 'gsap'
import { FaXmark } from 'react-icons/fa6'

export default function ToplineMenuClose() {
  const onClickHandler = () => {
    document.documentElement.style.overflow = 'auto'
    const tl = gsap.timeline()
    tl.to('.topline-menu', { left: '-100%' })
    tl.to('.topline-menu-wrapper', { display: 'none' })
  }

  return (
    <div
      className="topline-menu-close absolute top-9 left-9 text-4xl cursor-pointer"
      onClick={onClickHandler}
    >
      <FaXmark />
    </div>
  )
}
