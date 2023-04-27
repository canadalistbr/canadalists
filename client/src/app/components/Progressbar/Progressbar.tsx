'use client'
import { useEffect, useState } from 'react'

function getGradient(progress: number) {
  const classnames = {
    good: 'from-lime-700 to-green-500',
    ok: 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ',
    bad: 'from-red-400 to-red-700'
  }

  if (progress < 100 && progress > 60) {
    return classnames['good']
  }

  if (progress <= 60 && progress > 40) {
    return classnames['ok']
  }

  if (progress <= 40) {
    return classnames['bad']
  }
}

export type ProgressbarProps = {
  progress: number
}
export function Progressbar({ progress }: ProgressbarProps) {
  const [width, setWidth] = useState(0)

  const backgroundColor = getGradient(progress)

  useEffect(() => {
    setWidth(progress)
  }, [progress])

  return (
    <div
      className="w-full h-12 bg-gray-200 rounded-2xl"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`flex items-center justify-center h-full text-center rounded-2xl bg-gradient-to-l ${backgroundColor} `}
        style={{ width: `${width}%` }}
      >
        <span className='text-3xl font-extrabold leading-none text-white '>{75}%</span>
      </div>
    </div>
  )
}
