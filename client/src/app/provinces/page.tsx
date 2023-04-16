import { Card } from 'app/components/Card/Card'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import Link from 'next/link'
import { ProvincesData } from '../../../data/provinces'
function Provinces() {
  return (
    <MaxWidthWrapper>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
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
    </MaxWidthWrapper>
  )
}

export default Provinces
