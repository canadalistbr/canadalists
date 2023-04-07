import Image from "next/image"
import { PropsWithChildren } from "react"

export type CardProps = PropsWithChildren<{
  title: string
  image: string
  slug: string
}>

export function Card({ title, image, slug, children }: CardProps) {
  return (
    <div className="p-3 shadow-lg divide-y divide-dashed">
      <div className="aspect-video relative p-2 opacity-80">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        <span className="absolute text-white text-9xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {slug}
        </span>
      </div>
      <div className="py-5 text-center text-gray-600">
        <span className="text-4xl">{title}</span>
      </div>
      <div className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae
        porro! Minima voluptatem ducimus dicta, velit, dolor corrupti amet nulla
        eaque, illo repellendus minus placeat perferendis. Assumenda libero
        beatae voluptate.
        {children}
      </div>
    </div>
  )
}
