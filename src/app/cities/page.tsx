import { getAllCities } from '@core/main/api/cities'
import { CitiesList } from "components/Cities/CitiesList"
import { Filters } from 'components/Filters'
import MaxWidthWrapper from 'components/MaxWidthWrapper'

async function Cities({ searchParams }: {
  searchParams: {
    [key: string]: string
  }
}) {

  const cities = await getAllCities(searchParams)

  return (
    <MaxWidthWrapper>
      <div className='flex flex-col gap-4'>
        <Filters />
        <CitiesList cities={cities}></CitiesList>
      </div>
    </MaxWidthWrapper>
  )
}

export default Cities
