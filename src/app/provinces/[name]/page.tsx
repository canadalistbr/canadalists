import {
  City,
  Immigration,
  Province as ProvinceModel,
  ProvinceOverview,
  ProvinceScore,
  Study
} from '@prisma/client'
import { SideCard } from 'app/components/Card/Card'
import { Info } from 'app/components/Info/Info'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import { Tabs } from 'app/components/Tabs'
import Link from 'next/link'
import { ProvinceCities } from './components/Cities'
import { ImmigrationPrograms } from './components/ImmigrationPrograms'
import axios from 'axios'
import { getProvinces } from 'api/getProvinces'

type ProvinceType = {
  params: {
    name: string
  }
}

export type ProvinceResponse = {
  province: ProvinceModel & {
    overview: ProvinceOverview & {
      scores: ProvinceScore[]
    }
    cities: City[]
    immigration: Immigration[]
    study: Study[]
  }
}

export async function getProvince(id: string): Promise<ProvinceResponse> {
  const res = await axios.get(`${process.env.BASE_URL}/api/provinces/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  return res.data
}

async function Province({ params }: ProvinceType) {
  const { name } = params
  const { province } = await getProvince(name)
  const { provinces } = await getProvinces()

  const { cities, immigration, overview } = province
  const { scores, bannerUrl } = overview

  const provinceLabel = province.name

  const tabs = [
    {
      name: 'Province',
      label: provinceLabel,
      // TODO: Temporary image
      content: <Info scores={scores} image={bannerUrl} alt="province_map" />
    },
    {
      name: 'Cities',
      label: 'Cities',
      content: <ProvinceCities cities={cities} />
    },
    {
      name: 'Immigration Programs',
      label: 'Immigration Programs',
      content: <ImmigrationPrograms immigrationPrograms={immigration} />
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
              backgroundImage: `url(${bannerUrl})`
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
