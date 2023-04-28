import Image from 'next/image'
import { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
  title: string
  image: string
  slug: string
  bottomLeft?: React.ReactNode
  bottomRight?: React.ReactNode
  upperLeft?: React.ReactNode
  upperRight?: React.ReactNode
}>

export function Card({
  title,
  image,
  slug,
  children,
  bottomLeft,
  bottomRight,
  upperLeft,
  upperRight
}: CardProps) {
  return (
    <div className="p-3 shadow-lg ">
      <div className="relative">
        <div className="aspect-video relative opacity-80">
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
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
      <div className="divide-y divide">
        <div className="py-3 text-center text-gray-600">
          <span className="text-4xl">{title}</span>
        </div>
        <div className="text-2xl text-center py-3">{children}</div>
      </div>
    </div>
  )
}

export type SideCardProps = Pick<CardProps, 'title' | 'image'> & {
  className: string
}

export function SideCard({ title, image, className }: SideCardProps) {
  return (
    <div className={`p-6 h-72 flex gap-6 justify-start items-center hover:shadow-lg hover:ease-in duration-300 border rounded-lg overflow-hidden ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={72}
          height={72}
          className="w-full h-full"
        />
      </div>
      <div className='flex-1 text-center'>
        <p className="text-gray-500 text-3xl font-medium inline-block">
          {title}
        </p>
      </div>
    </div>
  )
}
