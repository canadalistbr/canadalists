import { TooltipComponent } from "@/components/ui/tooltip";
import { CityModel } from "@core/domain/models";
import { Card } from "components/Card/Card";
import { Tag } from "components/Tag";
import Link from "next/link";
import { isEmpty } from "ramda";
import { CitySize } from "../__utils__";

type CitiesListProps = {
    cities: CityModel[]
}

function getCitySize(population: number): CitySize {
    if (population <= 100000) {
        return CitySize.Small
    }
    if (population > 100000 && population <= 1000000) {
        return CitySize.Medium
    }
    return CitySize.Big
}

function getWinterSeverity(winter: string) {
    if (winter === 'Mild') {
        console.log('mild')
        return `🌨️ ${winter} winter`
    }
    if (winter === 'Cold') {
        console.log('cold')
        return `❄️ ${winter} winter`
    }
    return `🥶 ${winter} winter`
}

function getLanguages(langs: string[]) {
    return <span>Language {langs.map(lang => lang)}</span>
}

function getCost(costRange: string, score: number) {
    const moneys = '💸'.repeat(score)
    let costOfLivingScore: string
    if (score === 3) {
        costOfLivingScore = 'High'
    } else if (score === 2) {
        costOfLivingScore = 'Medium'
    } else {
        costOfLivingScore = 'Low'
    }

    return (
        <TooltipComponent content={<p>{costOfLivingScore} Cost of living</p>}>
            <div className='flex flex-col items-center'>
                <span>{moneys} {costRange}</span>
                <span className='text-base'>2 people in downtown</span>
            </div>
        </TooltipComponent>
    )
}


function CitiesList({ cities }: CitiesListProps) {

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
            {cities.map(city => {
                const {
                    id,
                    slug,
                    name,
                    imageUrl,
                    costOfLiving,
                    overallScore,
                    language,
                    provinces,
                    population,
                    winter,
                    immigrationDestinationRank,
                    ...restProps
                } = city;

                console.log(winter)
                const citySize = getCitySize(population);
                const center = <div className='gap-4 flex justify-center items-center flex-col '>
                    <span>{name}</span>
                    <span className='text-xl'>{provinces.name}</span>
                </div>;
                const bottomLeft = getWinterSeverity(winter);
                const bottomRight = getLanguages(language);
                const topLeft = getCost(costOfLiving, overallScore);
                return <Link key={id} href={`/cities/${slug}`}>
                    <Card center={center} title={name} image={imageUrl} bottomLeft={bottomLeft} bottomRight={bottomRight} upperLeft={topLeft}>
                        <Tags {...restProps} citySize={citySize} />
                    </Card>
                </Link>;
            })}
        </div>
    )
}

export { CitiesList };



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
        <div className='gap-2 text-lg flex flex-wrap'>
            <Tag>
                {citySize}
            </Tag>
            {festivals ? (
                <TooltipComponent content={<p className="text-white">{festivals}</p>}>
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