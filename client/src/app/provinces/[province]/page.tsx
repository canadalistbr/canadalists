'use client'

import { SideCard } from 'app/components/Card/Card'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import { Tabs } from 'app/components/Tabs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ProvincesData } from '../../../../data/provinces'

function Province() {
  const pathName = usePathname().split('/')
  const provinceLabel = pathName[pathName.length - 1].replace(/%20/g,' ')

  const tabs = [
    {
      name: 'Province',
      label: provinceLabel,
      content: <div>Tab 1 content goes here</div>
    },
    {
      name: 'Cities',
      label: 'Cities',
      content: <div>Tab 2 content goes here</div>
    },
    {
      name: 'Immigration Programs',
      label: 'Immigration Programs',
      content: <div>Tab 3 content goes here</div>
    }
  ]

  return (
    <MaxWidthWrapper>
      <div className="flex p-4 ">
        <div className=" flex flex-col gap-4">
          {ProvincesData.map((province) => (
            <Link key={province.id} href={`/provinces/${province.name}`}>
              <SideCard className={province.name === provinceLabel ?'shadow-xl' : ''} title={province.name} image="/img/montreal.png" />
            </Link>
          ))}
        </div>
        <section className="flex-1 mx-10 overflow-hidden  rounded-t-2xl ">
          <header className="h-72 mg-4 bg-[url('/img/montreal.png')] w-full rounded-t-2xl" />
          <main className="rounded-t-3xl bg-white -translate-y-1/4">
            <Tabs tabs={tabs} />
          </main>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}

export default Province
