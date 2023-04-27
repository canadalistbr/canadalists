import { ReactNode } from 'react'

type MaxWidthWrapperProps = {
  children: ReactNode
}

export function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return (
    <div
      className="container relative px-4 mx-auto "
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
