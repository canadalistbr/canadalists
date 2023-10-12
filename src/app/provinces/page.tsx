import LoadProvincesUsecase from '@core/application/provinces/load-province-usecase'
import { Province } from '@core/domain/models'
import { ProvincesHttpGateway } from '@core/infra/province/provinces-gateway'
import { axiosHttp } from '@core/main/http'
import { Card } from 'components/Card/Card'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { Tag } from 'components/Tag'
import Link from 'next/link'
import { assertNotEmpty } from '../../../utils/assertion'

export async function getProvinces(): Promise<Province[]> {
  const loadProvincesGateway = new ProvincesHttpGateway(axiosHttp)
  return new LoadProvincesUsecase(loadProvincesGateway).loadAll()
}

async function Provinces() {
  const provinces = await getProvinces()
  assertNotEmpty(provinces)

  return (
    <MaxWidthWrapper>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {provinces.map((province) => (
          <Link key={province.id} href={`/provinces/${province.slug}`}>
            <Card
              short={province.short}
              title={province.name}
              image={province.imageUrl}
            >
              <div>
                <div className="flex items-center justify-center gap-1 text-gray-600 py-2">
                </div>
                <div className="flex justify-center gap-3 text-gray-600 ">
                  {province.topCities.map((city, i) => (
                    <Tag
                      classNames="hover:shadow-md  transition duration-300"
                      key={i}
                    >
                      {city}
                    </Tag>
                  ))}
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
