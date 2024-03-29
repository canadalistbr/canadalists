import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { getAllCities } from '@core/main/api/cities'
import MaxWidthWrapper from 'components/MaxWidthWrapper'
import { ListFilter } from "lucide-react"
import { isEmpty } from "ramda"
import { CitiesList } from './components/CitiesList'
import { ComparisonDialog } from "./components/ComparisonDialog"
import { Filters } from './components/Filters'

export type CitiesProps = {
  searchParams: {
    [key: string]: string
  }
}

async function Cities({ searchParams }: CitiesProps) {

  const cities = await getAllCities(searchParams)
  const hasFilters = !isEmpty(searchParams)
  return (
    <MaxWidthWrapper>
      <div className='flex flex-col gap-4'>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="gap-1 hover:no-underline ml-auto " expand={false}>
              <Badge className={`p-2 px-4 ${hasFilters && "bg-red-500"}`}>
                <div className="flex gap-3 justify-center items-center">
                  <Label className="text-2xl font-bold" >
                    Filters
                  </Label>
                  <ListFilter size={15} />
                </div>
              </Badge>
            </AccordionTrigger>
            <AccordionContent>
              <Filters />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <CitiesList cities={cities} />
      </div>
      <ComparisonDialog cities={cities} />
    </MaxWidthWrapper>
  )
}

export default Cities
