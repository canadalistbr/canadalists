import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { getAllCities } from '@core/main/api/cities'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { Filter } from "lucide-react"
import { CitiesList } from './components/CitiesList'
import { Filters } from './components/Filters'

export type CitiesProps = {
  searchParams: {
    [key: string]: string
  }
}

async function Cities({ searchParams }: CitiesProps) {

  const cities = await getAllCities(searchParams)

  return (
    <MaxWidthWrapper>
      <div className='flex flex-col gap-4'>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="gap-1" expand={false}>Filters <Filter size={12} /> </AccordionTrigger>
            <AccordionContent>
              <Filters />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <CitiesList cities={cities}></CitiesList>
      </div>
    </MaxWidthWrapper>
  )
}

export default Cities
