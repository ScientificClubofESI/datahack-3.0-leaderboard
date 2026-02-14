'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const challenges = [
  {
    id: 1,
    number: '01',
    title: 'RoboVision Challenge',
    weight: '5',
    description: 'Develop a model that predicts multi-step pick-and-place sequences for robots from a single perspective camera image. Participants must detect objects, understand spatial relationships, and translate 2D observations into 3D world coordinates to plan optimal manipulation actions.',
    kaggleLink: 'https://www.kaggle.com/t/a346cc82fe994d9fab40e174598ad639',
  },
  {
    id: 2,
    number: '02',
    title: 'QuantumQuest: The Initial Mapping',
    weight: '5',
    description: 'Build a solution that maps logical qubits to physical qubits on quantum devices to improve program efficiency and reduce errors. This challenge focuses on solving an optimization problem critical for running quantum programs effectively.',
    kaggleLink: 'https://www.kaggle.com/t/56b5df5e2eb840939a1ced17a9d2665e',
  },
  {
    id: 3,
    number: '03',
    title: 'Pharma-Semantic Challenge',
    weight: '4',
    description: 'Create a deep learning model that reads pharmacological properties of drug pairs and produces human-readable clinical alerts. The goal is to help healthcare professionals manage drug-drug interactions and improve patient safety.',
    kaggleLink: 'https://www.kaggle.com/t/aaf82fabb7f0403b8f9b47057370a14d',
  },
  {
    id: 4,
    number: '04',
    title: 'Deep-Pharma Multimodal Intelligence',
    weight: '3',
    description: 'Build a multi-task machine learning model to predict drug-drug interactions, including severity, side effects, and population likelihood. Participants aim to prevent adverse events and reduce healthcare costs using predictive AI.',
    kaggleLink: 'https://www.kaggle.com/t/aeafdbb04b81461d9c33f267ad15f2fa',
  },
    {
    id: 5,
    number: '05',
    title: 'SeaFloor Pattern Classification Challenge',
    weight: '2',
    description: 'Create a model to classify patterns on the seafloor from underwater data. Participants explore unmapped areas to detect geological and biological structures, revealing insights about Earth’s underwater landscapes.',
    kaggleLink: 'https://www.kaggle.com/t/a13dd82e0e084d8091b868ebb6e0c461',
  },
  {
    id: 6,
    number: '06',
    title: 'Well Log Reconstruction Challenge',
    weight: '4',
    description: 'Develop a model to predict missing well log measurements from real LAS files. Participants handle multi-target regression, noisy and incomplete data, and replicate workflows used in petroleum reservoir characterization.',
    kaggleLink: 'https://www.kaggle.com/t/7ad72943be3a483e9ca98ec3c38b5743',
  },
    {
    id: 7,
    number: '07',
    title: 'Well Log Reconstruction Challenge',
    weight: '2',
    description: 'Investigate the catastrophic failure of ORACLE, the flagship trading model at Meridian Capital, and decrypt a 48-byte file left behind by its missing creator. Participants must analyze market data, uncover hidden model blind spots, and extract three failure-based keys',
    kaggleLink: 'https://www.kaggle.com/t/f4e283eb33d249c79b01d545bbe79b0a',
  }
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