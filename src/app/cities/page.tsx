import {
  TooltipComponent
} from "@/components/ui/tooltip"
import { getAllCities } from '@core/main/api/cities'
import { Card } from 'components/Card/Card'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { Tag } from 'components/Tag'
import Link from 'next/link'
import { isEmpty } from 'ramda'

function getCitySize(population: number): '🏡Small' | '🏙️Middle-Size' | '🌆Big' {
  if (population <= 100000) {
    return '🏡Small'
  }
  if (population > 100000 && population <= 1000000) {
    return '🏙️Middle-Size'
  }
  return '🌆Big'
}

function getWinterSeverity(winter: string) {
  if (winter === 'mild') {
    `🌨️${winter} winter`
  }
  if (winter === 'cold') {
    ` ❄️ ${winter} winter`
  }
  return `🥶${winter} winter`
}

function getLanguages(langs: string[]) {
  return <span>Language {langs.map(lang => lang)}</span>
}

function getCost(costRange: string, score: number) {
  const moneys = '💸'.repeat(score)

  return (
    <TooltipComponent content={<p>Cost of living</p>}>
      <div className='flex flex-col items-start'>
        <span>{moneys} {costRange}</span>
        <span className='text-base'>2 people in downtown</span>
      </div>
    </TooltipComponent>
  )
}

async function Cities() {
  const cities = await getAllCities()

  return (
    <MaxWidthWrapper>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {cities.map((city) => {
          const { id, slug, name, imageUrl, costOfLiving, overallScore, language, provinces, population, winter, immigrationDestinationRank, ...restProps } = city
          const citySize = getCitySize(population)
          const center = <div className='gap-4 flex justify-center items-center flex-col '>
            <span>{name}</span>
            <span className='text-xl'>{provinces.name}</span>
          </div>

          const bottomLeft = getWinterSeverity(winter)
          const bottomRight = getLanguages(language)
          const topLeft = getCost(costOfLiving, overallScore)

          return (
            <Link key={id} href={`/cities/${slug}`}>
              <Card
                center={center}
                title={name}
                image={imageUrl}
                bottomLeft={bottomLeft}
                bottomRight={bottomRight}
                upperLeft={topLeft}
              >
                <Tags {...restProps} citySize={citySize} />
              </Card>
            </Link>
          )
        })}
      </div>
    </MaxWidthWrapper>
  )
}

export default Cities

export type TagsProps = {
  festivals: string
  industries: string[]
  nature: boolean
  bikeFriendly: boolean
  citySize: ReturnType<typeof getCitySize>
}

function Tags(props: TagsProps) {
  const { festivals, industries, nature, bikeFriendly, citySize } = props
  return (
    <div className='text-lg flex flex-wrap'>
      <Tag>
        {citySize}
      </Tag>
      {festivals ? <Tag>
        🎉Festivals city
      </Tag> : null
      }
      {
        nature ? <Tag>
          🌲Nature
        </Tag> : null
      }
      {
        bikeFriendly ? <Tag>
          🚴Bike friendly
        </Tag> : null
      }
      {
        !isEmpty(industries) ?
          industries.map((industry, i) => (
            <Tag>
              {industry} pole
            </Tag>
          ))
          : null
      }
    </div>
  )
}