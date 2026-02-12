'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-02-14T12:30:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1 text-[#E2BFFD] font-mono">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-[12px] text-gray-400 uppercase">Hours</span>
      </div>
      <span className="text-2xl pb-3">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-[12px] text-gray-400 uppercase">Mins</span>
      </div>
      <span className="text-2xl pb-3">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-[12px] text-gray-400 uppercase">Seconds</span>
      </div>
    </div>
  )
}