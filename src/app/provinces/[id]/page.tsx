import {
  makeGetProvinceBy,
  makeGetProvinces
} from '@core/main/factories/province'
import { SideCard } from 'components/Card/Card'
import { Info } from 'components/Info/Info'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { Tabs } from 'components/Tabs'
import Link from 'next/link'
import { ReactNode } from 'react'
import { assertNotEmpty, assertNotNull } from '../../../../utils/assertion'
import { ImmigrationPrograms } from './components/ImmigrationPrograms'
import { ProvinceCities } from './components/ProvinceCities'

type ProvinceType = {
  params: {
    id: string
  }
}

function Label({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-1">{children}</div>
}

async function ProvincePage({ params }: ProvinceType) {
  const { id } = params
  const province = await makeGetProvinceBy(id)
  const provinces = await makeGetProvinces()
  const { cities, immigration, overview } = province

  assertNotEmpty(provinces)
  assertNotNull(overview, 'every province has an overview')
  assertNotNull(cities, 'every province has at least one city')
  assertNotNull(
    immigration,
    'every province has at leat one immigration program'
  )

  const { scores, bannerUrl } = overview
  const provinceName = province.name

  const provinceLabel = (
    <Label>
      🇨🇦<span>{provinceName}</span>
    </Label>
  )
  const citiesLabel = (
    <Label>
      🏙️ <span>Cities</span>
    </Label>
  )
  const immigrationProgramsLabel = (
    <Label>
      🌍<span>Immigration programs</span>
    </Label>
  )

  const tabs = [
    {
      name: 'Province',
      label: provinceLabel,
      content: <Info scores={scores} image={bannerUrl} alt="province_map" />
    },
    {
      name: 'Cities',
      label: citiesLabel,
      content: <ProvinceCities cities={cities} />
    },
    {
      name: 'Immigration Programs',
      label: immigrationProgramsLabel,
      content: <ImmigrationPrograms immigrationPrograms={immigration} />
    }
  ]

  return (
    <MaxWidthWrapper>
      <div className="p-4">
        <div
          className="mb-4 gap-4 flex xl:grid xl:grid-cols-[repeat(auto-fill,minmax(auto,17rem))]"
        >
          {provinces.map((province) => (
            <Link key={province.id} href={`/provinces/${province.slug}`}>
              <SideCard
                className={
                  province.name === provinceName
                    ? 'border-1 text-red-400 shadow-xl'
                    : 'text-gray-500'
                }
                title={province.name}
                slug={province.slug}
                image={province.imageUrl}
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
                {province.name}
              </span>
              {/* TODO: temporary - use an icon or somthing fancier */}
              {/* Bottom left */}
              <Link href={'/'}>
                <span className=" underline cursor-pointer absolute bottom-4 left-2 text-2xl text-white">
                  {'/HOME'}
                </span>
              </Link>
            </div>
          </header>
          <main className="bg-white rounded-t-3xl ">
            <Tabs tabs={tabs} />
          </main>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}

export default ProvincePage
