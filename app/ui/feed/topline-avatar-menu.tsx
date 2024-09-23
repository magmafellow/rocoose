'use client'
import gsap from 'gsap'
import { useState } from 'react'

export default function AvatarMenu({user}: {user: any}) {
  const onClickHandler = (e: any) => {
    document.documentElement.style.overflow = 'hidden'
    const tl = gsap.timeline()
    tl.to('.topline-menu-wrapper', { display: 'block', duration: 0.01 })
    tl.to('.topline-menu', { left: '0%' })
  }

  return (
    <div
      className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
      onClick={onClickHandler}
    >
      <img
        className="w-full h-full object-cover"
        src={`/${user.profilePicture}`}
        alt="avatar"
      />
    </div>
  )
}
