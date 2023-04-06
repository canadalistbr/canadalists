import { ReactNode } from 'react'

type MaxWidthWrapperProps = {
  children: ReactNode
}

export function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return (
    <div
      className="
        container
        relative
        max-w-[calc(1200px + 32px * 2)]   
        mx-auto
        px-4
      "
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
