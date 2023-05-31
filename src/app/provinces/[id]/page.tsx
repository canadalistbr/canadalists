import Link from 'next/link'
import { ProvinceCities } from './components/Cities'
import { ImmigrationPrograms } from './components/ImmigrationPrograms'
import axios from 'axios'
import { getProvinces } from 'api/getProvinces'
import { SideCard } from 'components/Card/Card'
import { Info } from 'components/Info/Info'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { Tabs } from 'components/Tabs'
import { ProvinceModel } from '@core/domain/models'

export async function getProvince(id: string): Promise<ProvinceModel> {
  const res = await axios.get(
    `${process.env.BASE_URL_BACKEND}/api/provinces/${id}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return res.data
}

type ProvinceType = {
  params: {
    id: string
  }
}

async function Province({ params }: ProvinceType) {
  const { id } = params
  const province = await getProvince(id)
  const provinces = await getProvinces()
  const { cities, Immigration, ProvinceOverview } = province
  // TODO: Throw Error
  if (!ProvinceOverview || !cities || !Immigration) return
  const { ProvinceScores, banner_url } = ProvinceOverview
  const provinceLabel = province.name

  const tabs = [
    {
      name: 'Province',
      label: provinceLabel,
      // TODO: Temporary image
      content: (
        <Info scores={ProvinceScores} image={banner_url} alt="province_map" />
      )
    },
    {
      name: 'Cities',
      label: 'Cities',
      content: <ProvinceCities cities={cities} />
    },
    {
      name: 'Immigration Programs',
      label: 'Immigration Programs',
      content: <ImmigrationPrograms immigrationPrograms={Immigration} />
    }
  ]

  return (
    <MaxWidthWrapper>
      <div className="p-4">
        <div className="mb-4 gap-4 flex xl:grid xl:grid-cols-[repeat(auto-fill,minmax(auto,16rem))]">
          {provinces.map((province) => (
            <Link key={province.id} href={`/provinces/${province.id}`}>
              <SideCard
                className={
                  province.name === provinceLabel
                    ? 'border-1 border-indigo-500 text-indigo-500'
                    : 'text-gray-500'
                }
                title={province.name}
                slug={province.slug}
                image={province.image_url}
              />
            </Link>
          ))}
        </div>
        <section className="flex-1 block overflow-hidden rounded-t-2xl ">
          <header
            className="h-96 mg-4 bg-no-repeat bg-center bg-cover w-full rounded-t-2xl"
            style={{
              backgroundImage: `url(${banner_url})`
            }}
          />
          <main className="bg-white rounded-t-3xl ">
            <Tabs tabs={tabs} />
          </main>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}

export default Province
