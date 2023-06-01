import { CSSProperties, PropsWithChildren } from 'react'

export type TagProps = Partial<
  PropsWithChildren<{
    styles: CSSProperties
    classNames: string
  }>
>

export function Tag({ children, styles, classNames }: TagProps) {
  return (
    <div className={`border p-3  ${classNames}`} style={styles}>
      {children}
    </div>
  )
}
