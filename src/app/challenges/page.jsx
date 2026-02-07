'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const challenges = [
  {
    id: 1,
    number: '01',
    title: 'Urban Sound Classification',
    weight: '18%',
    description: 'The urban sounds classification challenge focuses on classifying urban soundscapes. Participants will develop a model that categorizes audio samples into ten predefined urban environments.',
    kaggleLink: '#',
  },
  {
    id: 2,
    number: '02',
    title: 'Urban Sound Classification',
    weight: '18%',
    description: 'The urban sounds classification challenge focuses on classifying urban soundscapes. Participants will develop a model that categorizes audio samples into ten predefined urban environments.',
    kaggleLink: '#',
  },
  {
    id: 3,
    number: '03',
    title: 'Urban Sound Classification',
    weight: '18%',
    description: 'The urban sounds classification challenge focuses on classifying urban soundscapes. Participants will develop a model that categorizes audio samples into ten predefined urban environments.',
    kaggleLink: '#',
  },
  {
    id: 4,
    number: '04',
    title: 'Urban Sound Classification',
    weight: '18%',
    description: 'The urban sounds classification challenge focuses on classifying urban soundscapes. Participants will develop a model that categorizes audio samples into ten predefined urban environments.',
    kaggleLink: '#',
  },
]

export default function ChallengesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-virgo text-white text-center mb-16 tracking-wider "
        >
          CHALLENGES
        </motion.h1>

        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-lg p-4 md:px-8 md:py-8 md:w-64 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start hover:bg-white/[0.05] hover:border-purple-500/40 transition-all duration-300 group">
                <div className="text-center md:text-left mb-0 md:mb-6">
                  <p className="text-3xl text-[#E2BFFD] mb-2">Challenge {challenge.number}</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[16px] text-white mb-1">Weight : {challenge.weight}</p>
                </div>
              </div>

              <div className="flex-1 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-lg p-4 md:px-12 md:py-8 hover:bg-white/[0.05] hover:border-purple-500/40 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {challenge.title}
                    </h2>
                    <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>

                  <a 
                    href={challenge.kaggleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg "
                  >
                    <Image 
                      src="/images/arrow.png" 
                      alt="Go to Kaggle competition"
                      width={24}
                      height={24}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}