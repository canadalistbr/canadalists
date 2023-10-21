import { getAllCities } from '@core/main/api/cities'
import { CitiesList } from "components/Cities/CitiesList"

async function Cities() {
  const cities = await getAllCities()

  return (
    <CitiesList cities={cities}></CitiesList>
  )
}

export default Cities
