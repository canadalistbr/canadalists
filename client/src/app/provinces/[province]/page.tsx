import { SideCard } from 'app/components/Card/Card'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import Link from 'next/link'
import { ProvincesData } from '../../../../data/provinces'
function Province() {
  return (
    <MaxWidthWrapper>
      <div className="flex p-4">
        <div className=" flex flex-col gap-4">
          {ProvincesData.map((province) => (
            <Link key={province.id} href={`/provinces/${province.slug}`}>
              <SideCard
                title={province.name}
                image="/img/montreal.png"
              />
            </Link>
          ))}
        </div>
        <div>
          <span>
            ProvinceInfo
          </span>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Province
