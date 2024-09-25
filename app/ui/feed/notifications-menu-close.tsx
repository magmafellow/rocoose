'use client'

import { MdMailOutline } from 'react-icons/md'
import gsap from 'gsap'
import { FaXmark } from 'react-icons/fa6'

export default function NotificationsMenuClose() {
  const onClickHandler = (e: any) => {
    const tl = gsap.timeline()
    tl.to('.topline-notifications-wrapper', { right: '-105%' })
  }
  return (
    <div className="text-3xl absolute top-5 right-8 cursor-pointer" onClick={onClickHandler}>
      <FaXmark />
    </div>
  )
}
