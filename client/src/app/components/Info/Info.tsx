import Image from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'

export type LabelWrapperProps = PropsWithChildren<{
  label: string
  symbol: string
}>
function LabelWrapper(props: LabelWrapperProps) {
  const { label, symbol, children } = props
  return (
    <div className="[&>*]:text-3xl [&>*]:text-black ">
      <LabelWithEmoji emojiProps={{ label, symbol }}>{children}</LabelWithEmoji>
    </div>
  )
}

export type InfoProps = {
  image: string
  alt: string
}

export function Info(props: InfoProps) {
  const { image, alt } = props
  return (
    <div className="grid grid-cols-2 gap-12">
      <table className="w-full table-auto">
        <tbody className="">
          <tr className="border-b">
            <td className="pb-8">
              <LabelWrapper label="employment" symbol="💻">
                Employment Opportunities
              </LabelWrapper>
            </td>
            <td className="pb-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="cost" symbol="💰">
                Cost of living
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="quality of life" symbol="🌟">
                Quality of life
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="climate" symbol="☀️ ">
                Climate
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="diversity" symbol="🌎">
                Cultural diversity
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="housing" symbol="🏠">
                Housing availability and affordability
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="healthcare" symbol="🏥">
                Access to healthcare
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="education" symbol="🎓">
                Education system
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="safety" symbol="🔒">
                Crime rates and safety
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="transportation" symbol="🚗">
                Transportation options
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="entertainment" symbol="🎭">
                Recreation and entertainment
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="environment" symbol="🌿">
                Environmental factors, such as air and water quality
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="dining" symbol="🍽️">
                Access to food and dining options
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="religion" symbol="🛐">
                Religious and cultural institutions
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="services" symbol="🏞️">
                Public services, such as parks and libraries
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="reputation" symbol="🏆">
                Overall reputation
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-8 ">
              <LabelWrapper label="business" symbol="🏢">
                Business friendly
              </LabelWrapper>
            </td>
            <td className="py-8 ">
              <Rating />
            </td>
          </tr>
        </tbody>
      </table>
      <section>
  <div className="aspect-video relative opacity-80 mb-4 border">
    <Image src={image} alt={alt} fill style={{ objectFit: 'cover' }} />
  </div>
  <div className="text-gray-500 text-3xl my-4 [&>*]:py-2 [&>*]:inline-block">
    <h2 className="sr-only">Moving to Quebec</h2>
    <p>
      <strong>Language:</strong> French is the official language of Quebec, and
      it&apos;s a requirement for most jobs and government services. It&apos;s highly
      recommended that you learn French before moving to Quebec. This will not
      only make your day-to-day life easier, but it will also increase your job
      opportunities.
    </p>
    <p>
      <strong>Immigration Programs:</strong> Quebec has its own immigration
      programs that are separate from Canada&apos;s federal programs. You&apos;ll need to
      apply through the Quebec government&apos;s immigration website to be considered
      for these programs. The programs include the Quebec Skilled Worker Program,
      the Quebec Experience Program, and the Quebec Business Immigration Program.
    </p>
    <p>
      <strong>Work Opportunities:</strong> Quebec has a diverse economy, with
      industries such as technology, aerospace, and biotechnology. However, it&apos;s
      important to research the job market and have a clear understanding of the
      opportunities available to you before moving. You may also want to consider
      getting your credentials recognized by Quebec&apos;s regulatory bodies to
      increase your chances of finding work in your field.
    </p>
    <p>
      <strong>Cost of Living:</strong> The cost of living in Quebec is generally
      lower than other major Canadian cities such as Toronto and Vancouver.
      However, it&apos;s still important to factor in the cost of housing,
      transportation, and other expenses when planning your move.
    </p>
    <p>
      <strong>Culture:</strong> Quebec has a unique culture and history, and
      it&apos;s important to respect and embrace it. The province is known for its
      music, art, and cuisine, so be sure to explore and immerse yourself in the
      local culture.
    </p>
  </div>
</section>
    </div>
  )
}

function Rating() {
  return (
    <div className="w-72 h-12 bg-slate-400 rounded-2xl ">
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
