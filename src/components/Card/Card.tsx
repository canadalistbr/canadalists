import Image from 'next/image'
import { PropsWithChildren, ReactElement } from 'react'

export type CardProps = PropsWithChildren<{
  title: string
  image: string
  center: ReactElement
  bottomLeft?: React.ReactNode
  bottomRight?: React.ReactNode
  upperLeft?: React.ReactNode
  upperRight?: React.ReactNode
}>

export function Card({
  title,
  image,
  center,
  children,
  bottomLeft,
  bottomRight,
  upperLeft,
  upperRight
}: CardProps) {
  return (
    <div className="hover:shadow-lg transition duration-300 border rounded-3xl ">
      <div className="relative rounded-3xl font-bold">
        <div className="relative aspect-video opacity-80 rounded-3xl">
          <Image
            className='rounded-3xl rounded-b-none brightness-50'
            priority
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <span className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 text-6xl top-1/2 left-1/2">
          {center}
        </span>
        <div className="p-2 absolute bottom-0 left-0 text-2xl text-white">
          {bottomLeft}
        </div>
        <div className="p-2 pr-5 absolute bottom-0 right-0 text-2xl text-white">
          {bottomRight}
        </div>
        <div className="p-2 pl-5 absolute top-0 bottom-0 left-0 text-4xl text-white">
          <div className='text-2xl flex justify-center items-start flex-col'>
            {upperLeft}
          </div>
        </div>
        <div className="absolute p-2 top-0 bottom-0 right-0 text-4xl text-white">
          <div className=' pr-5 flex justify-center items-end flex-col'>
            <span className='text-xl'>🏆<span className='text-2xl underline'>{Math.ceil(Math.random() * 10)} </span></span>
            <span className='text-base'>immigrants destination</span>
          </div>
        </div>
      </div>
      <div className="p-4 flex text-2xl text-center">
        <div className='gap-4 ml-auto mr-auto flex flex-wrap'>
          {children}
        </div>
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
        <Image src={image} alt={title} width={42} height={42} />
        <span
          className="absolute text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 xl:hidden top-1/2 left-1/2"
        >
          {slug}
        </span>
      </div>
      <div className="flex-1 hidden break-word xl:block">
        <p className="inline-block text-2xl font-medium ">{title}</p>
      </div>
    </div>
  )
}
