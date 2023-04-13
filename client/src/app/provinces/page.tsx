import { Card } from 'app/components/Card/Card'
import Link from 'next/link'
import { ProvincesData } from '../../../data/provinces'
function Provinces() {
  return (
    <div className="grid relative gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
      {ProvincesData.map((province) => (
        <Link key={province.id} href={`/provinces/${province.slug}`}>
          <Card
            slug={province.slug}
            title={province.name}
            image="/img/montreal.png"
          />
        </Link>
      ))}
    </div>
  )
}

export default Provinces
