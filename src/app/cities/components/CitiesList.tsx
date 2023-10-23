import { CityModel } from "@core/domain/models";
import { Card } from "components/Card/Card";
import Link from "next/link";
import { getCitySize, getCost, getLanguages, getWinterSeverity, Tags } from "../helpers";

type CitiesListProps = {
    cities: CityModel[]
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
                    <Link key={id} href={`/cities/${slug}`}>
                        <Card center={center} title={name} image={imageUrl} bottomLeft={bottomLeft} bottomRight={bottomRight} upperLeft={topLeft}>
                            <Tags {...restProps} citySize={citySize} />
                        </Card>
                    </Link>);
            })}
        </div>
    )
}

export { CitiesList };
