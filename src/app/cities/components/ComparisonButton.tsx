'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCompareCities } from "context/ComparisonContext";
import { XCircle } from "lucide-react";
import { isEmpty } from "ramda";


function getLabel(cities: string[]) {
  if (cities.length === 1) {
    return `Select one or two more cities`
  }
  if (cities.length === 2) {
    return `Compare ${cities.join(' and ')}`
  }
  if (cities.length === 3) {
    const citiesCopy = [...cities]
    citiesCopy.splice(citiesCopy.length - 1, 0, ' and ')
    citiesCopy.splice(1, 0, ' , ')
    return `Compare ${citiesCopy.join(' ')}`
  }
}

export function ComparisonButton() {
  const { selectedCities, removeAllCities } = useCompareCities()
  const hasCitiesToCompare = !isEmpty(selectedCities)
  const isButtonDisabled = selectedCities.length === 1

  return hasCitiesToCompare ? (
    <Button className={`cursor-pointer fixed bottom-0 left-1/2 -translate-x-1/2 p-10 ${isButtonDisabled && 'opacity-50 cursor-not-allowed'} `}
      onClick={e => {
        e.stopPropagation()
        // TODO: implement open Modal logic
        if (isButtonDisabled) {
          return
        }
        alert('clicked button')
      }}
    >
      <Label className={`cursor-pointer ${isButtonDisabled && 'cursor-not-allowed'} hover:underline text-3xl`}>
        <div className="flex gap-2 items-center justify-center">
          {getLabel(selectedCities)}
          {!isButtonDisabled ? <XCircle className={`${isButtonDisabled && 'pointer-events-none'}`} onClick={(e) => {
            e.stopPropagation()
            removeAllCities()
          }} /> : null}

        </div>
      </Label>
    </Button>
  ) : null
}