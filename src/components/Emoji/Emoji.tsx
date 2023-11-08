import { PropsWithChildren, ReactNode } from 'react'

export type EmojiProps = {
  label: string
  symbol: ReactNode
}

export function Emoji(props: EmojiProps) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
    >
      {props.symbol}
    </span>
  )
}

export type LabelWithEmojiProps = PropsWithChildren<{
  emojiProps: EmojiProps
}>

export function LabelWithEmoji(props: LabelWithEmojiProps) {
  const { emojiProps, children } = props
  return (
    <div className="flex gap-2 [&>*]:text-lg [&>*]:text-black ">
      <Emoji {...emojiProps} />
      <span>{children}</span>
    </div>
  )
}
