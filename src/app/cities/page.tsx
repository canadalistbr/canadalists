import { getAllCities } from '@core/main/api/cities'
import { Card } from 'components/Card/Card'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { Tag } from 'components/Tag'
import Link from 'next/link'
import { isEmpty } from 'ramda'


function getCitySize(population: number): '🏡Small' | '🏙️Middle-Size' | '🌆Big' {
  if (population <= 100000) {
    return '🏡Small'
  }
  if (population > 100000 && population <= 1000000) {
    return '🏙️Middle-Size'
  }
  return '🌆Big'
}

async function Cities() {
  const cities = await getAllCities()

  return (
    <MaxWidthWrapper>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {cities.map((city) => {
          const { id, slug, name, imageUrl, provinces, population, ...restProps } = city
          const citySize = getCitySize(population)
          const center = <div className='gap-4 flex justify-center items-center flex-col '>
            <span>{name}</span>
            <span className='text-xl'>{provinces.name}</span>
          </div>

          return (
            <Link key={id} href={`/cities/${slug}`}>
              <Card
                center={center}
                title={name}
                image={imageUrl}
              >
                <Tags {...restProps} citySize={citySize} />
              </Card>
            </Link>
          )
        })}
      </div>
    </MaxWidthWrapper>
  )
}

export default Cities

export type TagsProps = {
  festivals: string
  industries: string[]
  nature: boolean
  bikeFriendly: boolean
  citySize: ReturnType<typeof getCitySize>
}

function Tags(props: TagsProps) {
  const { festivals, industries, nature, bikeFriendly, citySize } = props
  return (
    <>
      <Tag
        classNames="hover:shadow-md  transition duration-300"
      >
        {citySize}
      </Tag>
      {festivals ? <Tag
        classNames="hover:shadow-md  transition duration-300"
      >
        🎉Festivals city
      </Tag> : null
      }
      {
        nature ? <Tag
          classNames="hover:shadow-md  transition duration-300"
        >
          🌲Nature
        </Tag> : null
      }
      {
        bikeFriendly ? <Tag
          classNames="hover:shadow-md  transition duration-300"
        >
          🚴Bike friendly
        </Tag> : null
      }
      {
        !isEmpty(industries) ?
          industries.map((industry, i) => (
            <Tag
              classNames="hover:shadow-md  transition duration-300"
            >
              {industry} pole
            </Tag>
          ))
          : null
      }
    </>
  )
}