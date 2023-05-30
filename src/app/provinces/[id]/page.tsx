import { SideCard } from 'app/components/Card/Card'
import { Info } from 'app/components/Info/Info'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import { Tabs } from 'app/components/Tabs'
import Link from 'next/link'
import { ProvinceCities } from './components/Cities'
import { ImmigrationPrograms } from './components/ImmigrationPrograms'
import axios from 'axios'
import { getProvinces } from 'api/getProvinces'

export type Province = {
  id: string
  name: string
  capital: string
  slug: string
  language: string[]
  top_cities: string[]
  immigration_ranking: number
  image_url: string
  flag_url: string
}

export type cities = {
  id: string
  name: string
  slug: string
  language: string[]
  image_url: string
  cost_of_living: number
  overall_score: number
  provinceId: string
}

export type Immigration = {
  id: string
  name: string
  description: string
  provinceId: string
}

export type ProvinceOverview = {
  id: string
  province_id: string
  banner_url: string
  ProvinceScores: ProvinceScores[]
}

export type ProvinceScores = {
  id: string
  name: string
  score: number
  emoji: string
  overview_id: string
}

export type Study = {
  id: string
  name: string
  description: string
  provinceId: string
  cityId: string
}

export type ProvinceModel = Province & {
  cities?: cities[]
  Immigration?: Immigration[]
  ProvinceOverview?: ProvinceOverview
  Study?: Study[]
}

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
          {provinces.map((provinceData) => (
            <Link
              key={provinceData.id}
              href={`/provinces/${provinceData.name}`}
            >
              <SideCard
                className={
                  provinceData.name === provinceLabel
                    ? 'border-1 border-indigo-500 text-indigo-500'
                    : 'text-gray-500'
                }
                title={provinceData.name}
                slug={provinceData.slug}
                image={provinceData.imageUrl}
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
