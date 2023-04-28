'use client'
import { useEffect, useState } from 'react'

export type ProgressbarProps = {
  progress: number
}
export function Progressbar({ progress }: ProgressbarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(progress)
  }, [progress])

  return (
    <div
      className="w-full h-12 bg-gray-200 rounded-full"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-green-500"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  )
}
