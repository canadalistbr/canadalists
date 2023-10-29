'use client'
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { CityModel } from "@core/domain/models";
import { Card } from "components/Card/Card";
import { useCompareCities } from "context/ComparisonContext";
import { useRouter } from "next/navigation";
import { getCitySize, getCost, getLanguages, getWinterSeverity, Tags } from "../helpers";

type CitiesListProps = {
    cities: CityModel[]
}

function CitiesList({ cities }: CitiesListProps) {

    const { addCity, selectedCities, removeCity, maxSelection } = useCompareCities()
    const router = useRouter()

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
                    costOverall,
                    ...restProps
                } = city;

                const citySize = getCitySize(population);
                const center = <div className='gap-4 flex justify-center items-center flex-col '>
                    <span>{name}</span>
                    <span className='text-xl'>{provinces.name}</span>
                </div>;
                const bottomLeft = getWinterSeverity(winter);
                const bottomRight = getLanguages(language);
                const topLeft = getCost(costOfLiving, costOverall);
                const reachedMaxCitiesSelection = selectedCities.length === maxSelection
                return (
                    <div className="cursor-pointer" onClick={() => router.push(`/cities/${slug}`)} key={id}>
                        <Card
                            center={center}
                            title={name}
                            image={imageUrl}
                            bottomLeft={bottomLeft}
                            bottomRight={bottomRight}
                            upperLeft={topLeft}
                        >
                            <div className="flex flex-col gap-4">
                                <Tags {...restProps} citySize={citySize} />
                                <Separator />
                                <div className="flex self-center 
                                flex-col justify-center items-center gap-2" >
                                    <Label className="text-2xl  cursor-pointer text-gray-600">Compare {name}</Label>
                                    {/* TODO: have background red when switched on */}
                                    <Switch
                                        className="cursor-grabbing"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            !selectedCities.includes(name) && !reachedMaxCitiesSelection ? addCity(name) : removeCity(name)
                                            return
                                        }}
                                        disabled={reachedMaxCitiesSelection && !selectedCities.includes(name)}
                                        checked={selectedCities.includes(name)}
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>);
            })}
        </div>
    )
}

export { CitiesList };
