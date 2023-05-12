import { Card } from 'app/components/Card/Card'
import { CustomTag } from 'app/components/CustomTag'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import { Province } from 'app/lib'
import Link from 'next/link'

async function getProvinces(): Promise<Provinces> {
  const res = await fetch(`${process.env.BASE_URL}/api/provinces/v1/provinces`)
  return res.json()
}

export type Provinces = {
  provinces: Province[]
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
              image="/img/montreal.png"
            >
              <div className="">
                <div className="flex items-center ">
                  <span className='inline-block' >Top Cities:</span>
                  <div className="flex gap-2">
                    {province.topCities.map((city, index) => (
                      <CustomTag key={index}>{city}</CustomTag>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Provinces

