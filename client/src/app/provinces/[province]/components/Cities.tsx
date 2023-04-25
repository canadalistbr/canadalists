import { Card } from 'app/components/Card/Card'
import Link from 'next/link'
import { ProvincesData } from '../../../../../data/provinces'

export function ProvinceCities() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(550px,1fr))]">
      {ProvincesData.map((province) => (
        <Link key={province.id} href={`/cities/${province.name}`}>
          <Card
            slug={province.slug}
            title={`${province.name}, ${province.slug}`}
            image="/img/montreal.png"
          />
        </Link>
      ))}
    </div>
  )
}
