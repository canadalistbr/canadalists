import { Label } from "@/components/ui/label"
import { TooltipComponent } from "@/components/ui/tooltip"
import { CostOverall, Language } from "@core/domain/models"
import { Tag } from "components/Tag"
import { isEmpty } from "ramda"
import { CitySize, Cost, Winter } from "./__utils__"

export function getWinterSeverity(winter: "Mild" | "Cold" | "Freezing"): Winter {
  return Winter[winter]
}
export const languagesMap: Record<Language, string> = {
  "En": "🇬🇧",
  "Fr": "🇫🇷",
}

export function getLanguages(langs: Language[]) {
  return <Label className="text-2xl font-bold">Language {langs.map((lang) => languagesMap[lang])}</Label>
}

export function getCost(costRange: string, costOverall: CostOverall) {
  const costOfLivingScore = Cost[costOverall]
  return (
    <TooltipComponent content={<Label className="text-black">Cost of 1 bedroom for 2 people in downtown </Label>}>
      <div className='flex flex-col items-start font-bold'>
        <Label className="text-xl font-bold">💰 {costRange}</Label>
        <Label className="text-xl">{costOfLivingScore}</Label>
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
    <div className='gap-2 text-base flex flex-wrap justify-center'>
      <Tag>
        {citySize}
      </Tag>
      {festivals ? (
        <TooltipComponent content={<Label className=" text-lg text-black">{festivals}</Label>}>
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