import { PropsWithChildren, ReactNode } from 'react'

export type InfoProps<TEntity> = {
  entity: TEntity
}

export type LabelWrapperProps = PropsWithChildren<{
  label: string
  symbol: string
}>
function LabelWrapper(props: LabelWrapperProps) {
  const { label, symbol, children } = props
  return (
    <div className="my-8 [&>*]:text-3xl [&>*]:text-black ">
      <LabelWithEmoji emojiProps={{ label, symbol }}>{children}</LabelWithEmoji>
    </div>
  )
}

export function Info() {
  return (
    <table className="w-full table-auto">
      <tbody className='' >
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="employment" symbol="💻">
              Employment Opportunities
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="cost" symbol="💰">
              Cost of living
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="quality of life" symbol="🌟">
              Quality of life
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="climate" symbol="☀️ ">
              Climate
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="diversity" symbol="🌎">
              Cultural diversity
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="housing" symbol="🏠">
              Housing availability and affordability
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="healthcare" symbol="🏥">
              Access to healthcare
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="education" symbol="🎓">
              Education system
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="safety" symbol="🔒">
              Crime rates and safety
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="transportation" symbol="🚗">
              Transportation options
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="entertainment" symbol="🎭">
              Recreation and entertainment
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="environment" symbol="🌿">
              Environmental factors, such as air and water quality
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="dining" symbol="🍽️">
              Access to food and dining options
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="religion" symbol="🛐">
              Religious and cultural institutions
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="services" symbol="🏞️">
              Public services, such as parks and libraries
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="reputation" symbol="🏆">
              Overall reputation
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 w-4/12">
            <LabelWrapper label="business" symbol="🏢">
              Business friendly
            </LabelWrapper>
          </td>
          <td className="py-2 ">
            <Rating />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

function Rating() {
  return (
    <div className="w-full h-12 bg-slate-400 rounded-2xl ">
      <div className="bg-green-400 h-full w-1/2  rounded-tl-2xl rounded-bl-2xl">
        <span className="opacity-0">meter</span>
      </div>
    </div>
  )
}

export type EmojiProps = {
  label: string
  symbol: ReactNode
}

function Emoji(props: EmojiProps) {
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

function LabelWithEmoji(props: LabelWithEmojiProps) {
  const { emojiProps, children } = props
  return (
    <div className="flex gap-2">
      <Emoji {...emojiProps} />
      <span>{children}</span>
    </div>
  )
}
