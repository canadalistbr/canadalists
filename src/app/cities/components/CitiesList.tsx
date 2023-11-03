'use client'
import { Separator } from "@/components/ui/separator";
import { CityModel } from "@core/domain/models";
import { Card } from "components/Card/Card";
import { useRouter } from "next/navigation";
import { isEmpty } from "ramda";
import { getCitySize, getCost, getLanguages, getWinterSeverity, Tags } from "../helpers";
import { ComparisonSection } from "./CardComparisonSection";

type CitiesListProps = {
    cities: CityModel[]
}

function CitiesList({ cities }: CitiesListProps) {

    const router = useRouter()

    const noCityFound = isEmpty(cities)
    return (
        noCityFound ? (
            <div className="flex justify-center items-center h-full">
                {/* TODO: displays a not found image */}
                No City found
            </div>
        ) :
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
                                    <ComparisonSection label={name} />
                                </div>
                            </Card>
                        </div>);
                })}
            </div>
    )
}

export { CitiesList };
