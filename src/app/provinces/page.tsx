import LoadProvincesUsecase from '@core/application/provinces/load-province-usecase'
import { Province } from '@core/domain/models'
import { ProvincesHttpGateway } from '@core/infra/province/provinces-gateway'
import { axiosHttp } from '@core/main/http'
import { Card } from 'components/Card/Card'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import Link from 'next/link'

export async function getProvinces(): Promise<Province[]> {
  const loadProvincesGateway = new ProvincesHttpGateway(axiosHttp)
  return new LoadProvincesUsecase(loadProvincesGateway).loadAll()
}

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
