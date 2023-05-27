import { City } from '@prisma/client'
import { Card } from 'components/Card/Card'
import Link from 'next/link'

export type ProvinceCitiesType = {
  cities: City[]
}

export function ProvinceCities({ cities }: ProvinceCitiesType) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(550px,1fr))]">
      {cities.map((city) => (
        <Link key={city.id} href={`/cities/${city.name}`}>
          <Card
            slug={city.slug}
            title={`${city.name}, ${city.slug}`}
            image="/img/montreal.png"
          />
        </Link>
      ))}
    </div>
  )
}
