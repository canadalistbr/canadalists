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
import { ProvincesData } from '../../../../data/provinces'
import { ProvinceCities } from './components/Cities'
import { ImmigrationPrograms } from './components/ImmigrationPrograms'
import axios from 'axios'

type ProvinceType = {
  params: {
    province: string
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
  const { province } = params
  const response = await getProvince(province)
  const scores = response.province.overview.scores

  const provinceLabel = province.replace(/%20/g, ' ').replace(/%26/g, '&')

  const tabs = [
    {
      name: 'Province',
      label: provinceLabel,
      // TODO: Temporary image
      content: (
        <Info scores={scores} image="/img/canada_map.jpg" alt="province_map" />
      )
    },
    {
      name: 'Cities',
      label: 'Cities',
      content: <ProvinceCities />
    },
    {
      name: 'Immigration Programs',
      label: 'Immigration Programs',
      content: <ImmigrationPrograms />
    }
  ]

  return (
    <MaxWidthWrapper>
      <div className="p-4">
        <div className="mb-4 gap-4 flex xl:grid xl:grid-cols-[repeat(auto-fill,minmax(auto,16rem))]">
          {ProvincesData.map((province) => (
            <Link key={province.id} href={`/provinces/${province.name}`}>
              <SideCard
                className={
                  province.name === provinceLabel
                    ? 'border-1 border-indigo-500 text-indigo-500'
                    : 'text-gray-500'
                }
                title={province.name}
                slug={province.slug}
                image="/img/montreal.png"
              />
            </Link>
          ))}
        </div>
        <section className="flex-1 block overflow-hidden rounded-t-2xl ">
          <header className="h-96 mg-4 bg-[url('/img/montreal.png')] w-full rounded-t-2xl" />
          <main className="bg-white rounded-t-3xl ">
            <Tabs tabs={tabs} />
          </main>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}

export default Province
