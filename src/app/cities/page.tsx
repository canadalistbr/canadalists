import { getAllCities } from '@core/main/api/cities'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { CitiesList } from './components/CitiesList'
import { Filters } from './components/Filters'

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
