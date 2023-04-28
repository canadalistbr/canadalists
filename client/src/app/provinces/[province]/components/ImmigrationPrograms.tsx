import { Card } from 'app/components/Card/Card'
import Link from 'next/link'
import { ProvincesData } from '../../../../../data/provinces'

export function ImmigrationPrograms() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(550px,1fr))]">
      {ProvincesData.map((province) => (
        <Link key={province.id} href={`/immigration_programs/${province.name}`}>
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
