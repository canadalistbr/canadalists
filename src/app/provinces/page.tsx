import { Card } from 'app/components/Card/Card'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import Link from 'next/link'
import { getProvinces } from 'api/getProvinces'

async function Provinces() {
  const provinces = await getProvinces()

  return (
    <MaxWidthWrapper>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {provinces.map((province) => (
          <Link key={province.id} href={`/provinces/${province.id}`}>
            <Card
              slug={province.slug}
              title={province.name}
              image={province.imageUrl}
            />
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Provinces
