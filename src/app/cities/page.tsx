import { City } from '@core/domain/models'
import { axiosHttp } from '@core/main/http'
import { Card } from 'components/Card/Card'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import Link from 'next/link'

export async function getCities(): Promise<City[]> {
  const res = await axiosHttp.get('/api/cities')
  if (!res.data) {
    throw Error('Something went Wrong')
  }
  return res.data
}

async function Cities() {
  const cities = await getCities()

  return (
    <MaxWidthWrapper>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {cities.map((city) => {
          const { id, slug, short, name, imageUrl } = city
          return (
            <Link key={id} href={`/cities/${slug}`}>
              <Card
                short={short}
                title={name}
                image={imageUrl}
              >
                <div>
                  <div className="flex items-center justify-center gap-1 text-gray-600 py-2">
                  </div>
                  <div className="flex justify-center gap-3 text-gray-600 ">
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </MaxWidthWrapper>
  )
}

export default Cities
