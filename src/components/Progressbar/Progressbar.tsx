'use client'
import { useEffect, useState } from 'react'

type GradientConfig = {
  className: string
  situation: string
}

const gradientConfigs: { [key: string]: GradientConfig } = {
  excellent: {
    className: 'from-lime-700 to-green-500',
    situation: 'Excellent'
  },
  good: {
    className: 'from-lime-700 to-green-500',
    situation: 'Good'
  },
  ok: {
    className: 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400',
    situation: 'Ok'
  },
  bad: {
    className: 'from-red-400 to-red-700',
    situation: 'Bad'
  }
}

function getGradient(progress: number) {
  if (progress <= 100 && progress > 80) {
    return gradientConfigs['excellent']
  }
  if (progress <= 80 && progress > 60) {
    return gradientConfigs['good']
  }
  if (progress <= 60 && progress > 40) {
    return gradientConfigs['ok']
  }
  if (progress <= 40) {
    return gradientConfigs['bad']
  }
}

export type ProgressbarProps = {
  progress: number
}
export function Progressbar({ progress }: ProgressbarProps) {
  const [width, setWidth] = useState(0)

  const backgroundColor = getGradient(progress)?.className
  const situation = getGradient(progress)?.situation

  useEffect(() => {
    setWidth(progress)
  }, [progress])

  return (
    <div
      className="w-full h-8 bg-gray-200 rounded-2xl"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`flex items-center justify-center h-full text-center rounded-2xl bg-gradient-to-l ${backgroundColor} `}
        style={{ width: `${width}%` }}
      >
        <span className="text-xl font-extrabold leading-none text-white ">
          {situation}
        </span>
      </div>
    </div>
  )
}
