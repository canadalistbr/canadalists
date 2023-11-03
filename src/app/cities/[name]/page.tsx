import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAllCities, getCityBy } from '@core/main/api/cities'
import { SideCard } from 'components/Card/Card'
import { Info } from 'components/Info/Info'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import Link from 'next/link'
import { ReactNode } from 'react'
import { assertNotEmpty, assertNotNull } from '../../../../utils/assertion'


type ProvinceType = {
    params: {
        name: string
    }
}

function Label({ children }: { children: ReactNode }) {
    return <div className="flex items-center gap-1">{children}</div>
}

async function CityPage({ params }: ProvinceType) {
    const { name } = params
    // TODO: pass getAllCities from cities page to this one
    const [cities, currentCity] = await Promise.all([getAllCities(), getCityBy(name)])
    const { cityOverview } = currentCity

    assertNotEmpty(cities)
    assertNotNull(cityOverview, 'every city has an overview')

    const { scores, bannerUrl } = cityOverview
    const cityName = currentCity.name

    const scoresLabel = (
        <Label>
            🥇<span>Scores</span>
        </Label>
    )


    return (
        <MaxWidthWrapper>
            <div className="p-4">
                <div
                    className="mb-4 gap-4 flex xl:grid xl:grid-cols-[repeat(auto-fill,minmax(auto,17rem))]"
                >
                    {cities.map((city) => (
                        <Link key={city.id} href={`/cities/${city.slug}`}>
                            <SideCard
                                className={
                                    city.name === cityName
                                        ? 'border-1 text-red-400 shadow-xl'
                                        : 'text-gray-500'
                                }
                                title={city.name}
                                slug={city.slug}
                                image={city.imageUrl}
                            />
                        </Link>
                    ))}
                </div>
                <section className="flex-1 block overflow-hidden rounded-t-2xl ">
                    <header
                        className="h-96 bg-no-repeat bg-center bg-cover w-full rounded-t-2xl"
                        style={{
                            backgroundImage: `url(${bannerUrl})`
                        }}
                    >
                        <div className='relative h-full w-full'>
                            {/* Center */}
                            <span className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 text-9xl top-1/2 left-1/2">
                                {currentCity.name}
                            </span>
                            {/* TODO: temporary - use an icon or somthing fancier */}
                            {/* Bottom left */}
                            <Link href={'/'}>
                                <span className=" underline cursor-pointer absolute bottom-4 left-2 text-2xl text-black">
                                    {'/HOME'}
                                </span>
                            </Link>
                        </div>
                    </header>
                    <main className="bg-white rounded-t-3xl ">
                        <Tabs defaultValue="scores" className="w-full]">
                            <TabsList className='bg-red-200'>
                                {/* TODO: add red color when selected */}
                                <TabsTrigger value="scores">
                                    🏅Scores
                                </TabsTrigger>

                                {/* FIXME: THIS IS JUST AN EXAMPLE */}
                                <TabsTrigger value="immigration"> 🛂Immigration</TabsTrigger>
                            </TabsList>
                            <TabsContent value="scores">
                                <Info scores={scores} image={bannerUrl} alt="province_map" />
                            </TabsContent>
                        </Tabs>
                    </main>
                </section>
            </div>
        </MaxWidthWrapper>
    )
}

export default CityPage
