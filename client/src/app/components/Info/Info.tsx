import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { LabelWithEmoji } from '../Emoji'
import { Progressbar } from '../Progressbar'

export type LabelWrapperProps = PropsWithChildren<{
  label: string
  symbol: string
}>
function LabelWrapper(props: LabelWrapperProps) {
  const { label, symbol, children } = props
  return (
    <div className="[&>*]:text-xl [&>*]:text-black ">
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
    <div className="grid grid-cols-3 gap-12">
      <div className="col-span-2 ">
        <table className='w-full' >
          <tbody className="">
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="employment" symbol="💻">
                  Employment Opportunities
                </LabelWrapper>
              </td>
              <td className="w-96">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="cost" symbol="💰">
                  Cost of living
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="quality of life" symbol="🌟">
                  Quality of life
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="climate" symbol="☀️ ">
                  Climate
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="diversity" symbol="🌎">
                  Cultural diversity
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="housing" symbol="🏠">
                  Housing availability and affordability
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="healthcare" symbol="🏥">
                  Access to healthcare
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="education" symbol="🎓">
                  Education system
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="safety" symbol="🔒">
                  Crime rates and safety
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="transportation" symbol="🚗">
                  Transportation options
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="entertainment" symbol="🎭">
                  Recreation and entertainment
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="environment" symbol="🌿">
                  Environmental factors, such as air and water quality
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="dining" symbol="🍽️">
                  Access to food and dining options
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="religion" symbol="🛐">
                  Religious and cultural institutions
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="services" symbol="🏞️">
                  Public services, such as parks and libraries
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="h-12 ">
              <td className="">
                <LabelWrapper label="reputation" symbol="🏆">
                  Overall reputation
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
            <tr className="">
              <td className="h-12">
                <LabelWrapper label="business" symbol="🏢">
                  Business friendly
                </LabelWrapper>
              </td>
              <td className="">
                <Progressbar progress={95} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <section>
        <div className="relative mb-4 border aspect-video opacity-80">
          <Image src={image} alt={alt} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="text-gray-500 text-xl p-2 my-4 [&>*]:py-2 [&>*]:inline-block leading-10">
          <h2 className="sr-only">Moving to Quebec</h2>
          <p>
            <strong>Language:</strong> French is the official language of
            Quebec, and it&apos;s a requirement for most jobs and government
            services. It&apos;s highly recommended that you learn French before
            moving to Quebec. This will not only make your day-to-day life
            easier, but it will also increase your job opportunities.
          </p>
          <p>
            <strong>Immigration Programs:</strong> Quebec has its own
            immigration programs that are separate from Canada&apos;s federal
            programs. You&apos;ll need to apply through the Quebec
            government&apos;s immigration website to be considered for these
            programs. The programs include the Quebec Skilled Worker Program,
            the Quebec Experience Program, and the Quebec Business Immigration
            Program.
          </p>
          <p>
            <strong>Work Opportunities:</strong> Quebec has a diverse economy,
            with industries such as technology, aerospace, and biotechnology.
            However, it&apos;s important to research the job market and have a
            clear understanding of the opportunities available to you before
            moving. You may also want to consider getting your credentials
            recognized by Quebec&apos;s regulatory bodies to increase your
            chances of finding work in your field.
          </p>
          <p>
            <strong>Cost of Living:</strong> The cost of living in Quebec is
            generally lower than other major Canadian cities such as Toronto and
            Vancouver. However, it&apos;s still important to factor in the cost
            of housing, transportation, and other expenses when planning your
            move.
          </p>
          <p>
            <strong>Culture:</strong> Quebec has a unique culture and history,
            and it&apos;s important to respect and embrace it. The province is
            known for its music, art, and cuisine, so be sure to explore and
            immerse yourself in the local culture.
          </p>
        </div>
      </section>
    </div>
  )
}
