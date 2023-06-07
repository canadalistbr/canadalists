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
    <div className="p-3 hover:shadow-lg transition duration-300 border ">
      <div className="relative">
        <div className="relative aspect-video opacity-80">
          <Image
            priority
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
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
        <div className=" text-2xl text-center">{children}</div>
      </div>
    </div>
  )
}

export type SideCardProps = Pick<CardProps, 'title' | 'image'> & {
  className: string
  slug: string
}

export function SideCard({ title, image, className, slug }: SideCardProps) {
  return (
    <div
      className={`
        xl:p-3 flex gap-4 justify-start items-center hover:shadow-md hover:ease-in duration-300 border rounded-full overflow-hidden 
        ${className}
      `}
    >
      <div className="relative overflow-hidden rounded-full">
        <Image
          loading="eager"
          src={image}
          alt={title}
          width={42}
          height={42}
          quality={25}
        />
        <span className="absolute text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 xl:hidden top-1/2 left-1/2">
          {slug}
        </span>
      </div>
      <div className="flex-1 hidden break-word xl:block">
        <p className="inline-block text-2xl font-medium ">{title}</p>
      </div>
    </div>
  )
}
