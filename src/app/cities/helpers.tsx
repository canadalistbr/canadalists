import { TooltipComponent } from "@/components/ui/tooltip"
import { Tag } from "components/Tag"
import { isEmpty } from "ramda"
import { CitySize, Cost, Winter } from "./__utils__"

export function getWinterSeverity(winter: "Mild" | "Cold" | "Freezing"): Winter {
  return Winter[winter]
}

export function getLanguages(langs: string[]) {
  return <span>Language {langs.map(lang => lang)}</span>
}

export function getCost(costRange: string, score: number) {
  let costOfLivingScore: string
  if (score === 3) {
    costOfLivingScore = Cost.High
  } else if (score === 2) {
    costOfLivingScore = Cost.Medium
  } else {
    costOfLivingScore = Cost.Low
  }

  return (
    <TooltipComponent content={<span className="text-black text-xl">Cost for 1 bedroom for 2 people in downtown </span>}>
      <div className='flex flex-col items-start'>
        <span> 🤑 {costRange}</span>
        <span className="text-lg">{costOfLivingScore}</span>
      </div>
    </TooltipComponent>
  )
}

export function getCitySize(population: number): CitySize {
  if (population <= 100000) {
    return CitySize.Small
  }
  if (population > 100000 && population <= 1000000) {
    return CitySize.Medium
  }
  return CitySize.Big
}


export type TagsProps = {
  festivals: string
  industries: string[]
  nature: boolean
  bikeFriendly: boolean
  citySize: ReturnType<typeof getCitySize>
}

export function Tags(props: TagsProps) {
  const { festivals, industries, nature, bikeFriendly, citySize } = props
  return (
    <div className='gap-2 text-lg flex flex-wrap'>
      <Tag>
        {citySize}
      </Tag>
      {festivals ? (
        <TooltipComponent content={<span className=" text-lg text-black">{festivals}</span>}>
          <Tag>
            🎉 Festivals city
          </Tag>
        </TooltipComponent>) : null
      }
      {
        nature ? <Tag>
          🌲 Nature
        </Tag> : null
      }
      {
        bikeFriendly ? <Tag>
          🚴 Bike friendly
        </Tag> : null
      }
      {
        !isEmpty(industries) ?
          industries.map((industry: string, i: number) => (
            <Tag key={i}>
              {industry} pole
            </Tag>
          ))
          : null
      }
    </div>
  )
}