'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

 const agendaDays = [
  {
    "day": 1,
    "date": "Thu 12.02.2026",
    "schedule": [
      {
        "time": "5 PM - 6 PM",
        "activity": "Check-in"
      },
      {
        "time": "6 PM - 7 PM",
        "activity": "Opening ceremony"
      },
      {
        "time": "7 PM - 8:30 PM",
        "activity": "Let the hack begin"
      },
      {
        "time": "8:30 PM - 9:30 PM",
        "activity": "Dinner break"
      },
      {
        "time": "10 PM - 12 AM",
        "activity": "Workshop: A (Oussama Boussahla)"
      }
    ]
  },
  {
    "day": 2,
    "date": "Fri 13.02.2026",
    "schedule": [
      {
        "time": "2 AM",
        "activity": "Midnight break"
      },
      {
        "time": "7 AM - 9 AM",
        "activity": "Breakfast"
      },
      {
        "time": "12 PM - 3 PM",
        "activity": "Lunch break"
      },
      {
        "time": "5 PM - 6 PM",
        "activity": "Coffee break"
      },
      {
        "time": "9 PM - 10 PM",
        "activity": "Dinner break"
      }
    ]
  },
  {
    "day": 3,
    "date": "Sat 14.02.2026",
    "schedule": [
      {
        "time": "2 AM",
        "activity": "Midnight break"
      },
      {
        "time": "7 AM - 8 AM",
        "activity": "Breakfast"
      },
      {
        "time": "12 PM - 12:30 PM",
        "activity": "Submissions"
      },
      {
        "time": "1 PM - 2 PM",
        "activity": "Lunch break"
      },
      {
        "time": "3 PM - 4 PM",
        "activity": "Networking session"
      },
      {
        "time": "4 PM - 5 PM",
        "activity": "Closing ceremony + announcement of the winners"
      }
    ]
  }
];

export default function AgendaPage() {
  const [activeDay, setActiveDay] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const stackX = useTransform(scrollYProgress, [0, 0.66, 1], ['0%', '-100%', '-100%'])
  const stackY = useTransform(scrollYProgress, [0, 0.66, 1], ['0%', '-100%', '-100%'])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.25) setActiveDay(0)
      else if (v < 0.5) setActiveDay(1)
      else setActiveDay(2)
    })

    return () => unsub()
  }, [scrollYProgress, isMobile])

  const currentDay = agendaDays[activeDay]
  if (!currentDay) return null

  return (
    <section ref={sectionRef} className="relative md:h-[300vh] p-16 md:px-0 py-16">
      <div className="md:sticky md:top-0 h-auto md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-20 md:top-20 left-1/2 -translate-x-1/2 z-30">
          <h1
            className="text-4xl mb-4 md:text-6xl  font-virgo text-white tracking-wider"
          >
            AGENDA
          </h1>
        </div>

        <div className="md:hidden w-full px-4 py-20 flex flex-col items-center justify-center min-h-screen space-y-2">
          {[...agendaDays.slice(0, activeDay)].map((day) => (
            <button
              key={`prev-${day.day}`}
              onClick={() => setActiveDay(day.day - 1)}
              className="w-full max-w-md bg-black/50 border border-purple-500/30 rounded-lg p-4 transition-all hover:border-purple-500/60"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-normal bg-gradient-to-r from-purple-400 to-white/50 bg-clip-text text-transparent">
                  DAY {day.day}
                </span>
                <span className="text-xs font-normal text-gray-500">{day.date}</span>
              </div>
            </button>
          ))}

          <div className="w-full max-w-md">
            <div className="mb-4 flex flex-row justify-between items-center">
              <h2 className="text-2xl font-normal bg-gradient-to-r from-purple-400 to-white/50 bg-clip-text text-transparent">
                DAY {currentDay.day}
              </h2>
              <p className="text-sm font-normal bg-gradient-to-r from-purple-400 to-white/50 bg-clip-text text-transparent">
                {currentDay.date}
              </p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border-2 border-purple-500 rounded-lg p-6 relative overflow-hidden">
              <div className="space-y-3">
                {currentDay.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-0"
                  >
                    <span className="text-white font-normal text-xs min-w-[90px]">{item.time}</span>
                    <span className="text-gray-400 font-normal text-xs text-right flex-1">
                      {item.activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {agendaDays.slice(activeDay + 1).map((day) => (
            <button
              key={`next-${day.day}`}
              onClick={() => setActiveDay(day.day - 1)}
              className="w-full max-w-md bg-black/50 border border-purple-500/30 rounded-lg p-4 transition-all hover:border-purple-500/60"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-normal bg-gradient-to-r from-purple-400 to-white/50 bg-clip-text text-transparent">
                  DAY {day.day}
                </span>
                <span className="text-xs font-normal text-gray-500">{day.date}</span>
              </div>
            </button>
          ))}
        </div>

       <motion.div
          className="hidden md:flex relative w-full h-screen"
          style={{
            x: stackX,
            y: stackY,
            willChange: 'transform',
          }}
        >
          {agendaDays.map((dayData, index) => {
            const baseLeft = 50
            const baseTop = 50
            const spacing = 50

            return (
              <motion.div
                key={dayData.day}
                className="absolute w-[600px] mt-4"
                style={{
                  left: `${baseLeft + index * spacing}%`,
                  top: `${baseTop + index * spacing}%`,
                  translateX: '-50%',
                  translateY: '-50%',
                }}
                animate={{
                  opacity: index === activeDay ? 1 : 0.35,
                  scale: index === activeDay ? 1 : 0.9,
                  zIndex: index === activeDay ? 20 : 10,
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                <div className="mb-5 flex flex-row justify-between items-center">
                  <h2 className="text-5xl font-normal bg-gradient-to-r from-purple-400 to-white/50 bg-clip-text text-transparent">
                    DAY {dayData.day}
                  </h2>
                  <p className="text-lg font-normal bg-gradient-to-r from-purple-400 to-white/50 bg-clip-text text-transparent">
                    {dayData.date}
                  </p>
                </div>
                <div className="bg-black/60 backdrop-blur-sm border-2 border-purple-500 rounded-lg p-12 relative overflow-hidden">
                  <div className="space-y-4">
                    {dayData.schedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-3 border-b border-gray-700/50 last:border-0"
                      >
                        <span className="text-white font-normal text-base min-w-[140px]">
                          {item.time}
                        </span>
                        <span className="text-gray-400 font-normal text-base text-right flex-1">
                          {item.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}