import { SideCard } from 'app/components/Card/Card'
import { Info } from 'app/components/Info/Info'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import { Tabs } from 'app/components/Tabs'
import Link from 'next/link'
import { ProvincesData } from '../../../../data/provinces'
import { ProvinceCities } from './components/Cities'
import { ImmigrationPrograms } from './components/ImmigrationPrograms'

type ProvinceType = {
  params: {
    province: string
  }
}

function Province({ params }: ProvinceType) {
  const { province } = params
  
  const provinceLabel = province.replace(/%20/g,' ').replace(/%26/g,'&')

  //TODO: temporary
  // const data = ProvincesData.find(province => province.name === provinceLabel)
  const tabs = [
    {
      name: 'Province',
      label: provinceLabel,
      // TODO: Temporary image
      content: <Info image='/img/canada_map.jpg' alt='province_map' />
    },
    {
      name: 'Cities',
      label: 'Cities',
      content: <ProvinceCities  />
    },
    {
      name: 'Immigration Programs',
      label: 'Immigration Programs',
      content: <ImmigrationPrograms  />
    }
  ]

  return (
    <MaxWidthWrapper>
      <div className="flex gap-4 p-4">
        <div className="flex flex-col gap-4">
          {ProvincesData.map((province) => (
            <Link key={province.id} href={`/provinces/${province.name}`}>
              <SideCard
                className={province.name === provinceLabel ? 'border-1 border-indigo-500' : ''}
                title={province.name}
                image="/img/montreal.png"
              />
            </Link>
          ))}
        </div>
        <section className="flex-1 overflow-hidden rounded-t-2xl ">
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
