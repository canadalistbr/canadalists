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
        <div className="relative aspect-video opacity-80">
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <span className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 text-9xl top-1/2 left-1/2">
          {slug}
        </span>
        <div className="absolute bottom-0 left-0 text-4xl text-white">
          {bottomLeft}
        </div>
        <div className="absolute bottom-0 right-0 text-4xl text-white">
          {bottomRight}
        </div>
        <div className="absolute top-0 bottom-0 left-0 text-4xl text-white">
          {upperLeft}
        </div>
        <div className="absolute top-0 bottom-0 right-0 text-4xl text-white">
          {upperRight}
        </div>
      </div>
      <div className="divide-y divide">
        <div className="py-3 text-center text-gray-600">
          <span className="text-4xl">{title}</span>
        </div>
        <div className="py-3 text-2xl text-center">{children}</div>
      </div>
    </div>
  )
}

export type SideCardProps = Pick<CardProps, 'title' | 'image'> & {
  className: string
}

export function SideCard({ title, image, className }: SideCardProps) {
  return (
    <div className={`p-4 flex gap-4 justify-start items-center hover:shadow-lg hover:ease-in duration-300 border rounded-lg overflow-hidden ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={72}
          height={72}
        />
      </div>
      <div className='text-center max-w-[13rem] flex-1 break-word'>
        <p className="inline-block text-3xl font-medium ">
          {title}
        </p>
      </div>
    </div>
  )
}
