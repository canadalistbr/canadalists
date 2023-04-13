import Image from "next/image"
import { PropsWithChildren } from "react"

export type CardProps = PropsWithChildren<{
  title: string
  image: string
  slug: string
  bottomLeft?: React.ReactNode
  bottomRight?: React.ReactNode
  upperLeft?: React.ReactNode
  upperRight?: React.ReactNode
}>

export function Card({ title, image, slug, children, bottomLeft, bottomRight, upperLeft, upperRight }: CardProps) {
  return (
    <div className="p-3 shadow-lg divide-y divide-dashed">
      <div className="aspect-video relative p-2 opacity-80">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        <span className="absolute text-white text-9xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {slug}
        </span>
        <div className="text-4xl absolute text-white bottom-0 left-0">
          {bottomLeft}
        </div>
        <div className="text-4xl absolute text-white bottom-0 right-0">
          {bottomRight}
        </div>
        <div className="text-4xl absolute text-white bottom-0 top-0 left-0">
          {upperLeft}
        </div>
        <div className="text-4xl absolute text-white bottom-0 top-0 right-0">
          {upperRight}
        </div>
      </div>
      <div className="py-5 text-center text-gray-600">
        <span className="text-4xl">{title}</span>
      </div>
      <div className="text-2xl">
        {children}
      </div>
    </div>
  )
}
