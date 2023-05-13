import { Province } from '@prisma/client'
import { Card } from 'app/components/Card/Card'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import Link from 'next/link'
export type Provinces = {
  provinces: Province[]
}

export async function getProvinces(): Promise<Provinces> {
  const res = await fetch(`${process.env.BASE_URL}/api/provinces`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
  return res.json()
}
async function Provinces() {
  const { provinces } = await getProvinces()

  return (
    <MaxWidthWrapper>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {provinces.map((province) => (
          <Link key={province.id} href={`/provinces/${province.name}`}>
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
