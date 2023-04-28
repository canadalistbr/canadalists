import { ReactNode } from 'react'

type MaxWidthWrapperProps = {
  children: ReactNode
}

export function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return (
    <div
      className="
        relative
        mx-auto
        px-4
      "
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
