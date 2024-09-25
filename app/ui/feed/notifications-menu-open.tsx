'use client'

import { MdMailOutline } from "react-icons/md";
import gsap from 'gsap'

export default function NotificationsMenuOpen() {
  const onClickHandler = (e: any) => {
    const tl = gsap.timeline()
    tl.to('.topline-notifications-wrapper', { right: '0%' })
  }
  return (
    <MdMailOutline className="text-2xl cursor-pointer" onClick={onClickHandler} />
  )
}